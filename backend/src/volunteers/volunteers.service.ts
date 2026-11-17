import { prisma } from "../lib/prisma";
import { AppError } from "../error-handling/app.error";

export async function registerVolunteer(actionId: number, userId: number) {
  for (let attempt = 0; attempt < 3; attempt++) {
    try {
      return await prisma.$transaction(
        async (tx) => {
          const citizen = await tx.citizen.findUnique({
            where: { ID_User: userId },
          });

          if (!citizen) {
            throw new AppError("Citizen not found.", 404);
          }

          const action = await tx.cleanup_Action.findUnique({
            where: { ID_Action: actionId },
            include: {
              _count: {
                select: {
                  volunteers: true,
                },
              },
            },
          });

          if (!action) {
            throw new AppError("Action not found.", 404);
          }

          const actionDateTime = new Date(action.action_date);

          actionDateTime.setHours(
            action.action_time.getHours(),
            action.action_time.getMinutes(),
            0,
            0,
          );

          if (actionDateTime <= new Date()) {
            throw new AppError("Action already passed.", 400);
          }

          if (action._count.volunteers >= action.max_volunteers) {
            throw new AppError("Action full.", 409);
          }

          return await tx.volunteers.create({
            data: {
              ID_User: userId,
              ID_Action: actionId,
            },
          });
        },
        {
          isolationLevel: "Serializable",
        },
      );
    } catch (error) {
      const code = (error as { code?: string }).code;

      if (code === "P2002") {
        throw new AppError("Already registered.", 409);
      }

      if (code === "P2034" && attempt < 2) {
        continue;
      }

      if (code === "P2034") {
        throw new AppError("Registration conflict.", 409);
      }

      throw error;
    }
  }

  throw new AppError("Registration conflict.", 409);
}

export async function getActionsForVolunteers(userId: number) {
  const citizen = await prisma.citizen.findUnique({
    where: {
      ID_User: userId,
    },
    include: {
      volunteer_actions: {
        include: {
          action: true,
        },
      },
    },
  });

  if (!citizen) {
    throw new AppError("Citizen not found.", 404);
  }

  return citizen.volunteer_actions.map((registration) => ({
    ID_User: registration.ID_User,
    ID_Action: registration.ID_Action,
    signup_time: registration.signup_time,
    action: registration.action,
  }));
}

export async function unregisterVolunteer(userId: number, actionId: number) {
  const registration = await prisma.volunteers.findUnique({
    where: {
      ID_User_ID_Action: {
        ID_Action: actionId,
        ID_User: userId,
      },
    },
  });

  if (!registration) throw new AppError("Registration not found.", 404);

  return prisma.volunteers.delete({
    where: {
      ID_User_ID_Action: {
        ID_User: userId,
        ID_Action: actionId,
      },
    },
  });
}
