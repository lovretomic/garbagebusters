import { prisma } from '../lib/prisma';
import { AppError } from "../error-handling/app.error";

export async function getActions() {
    const actions = await prisma.cleanup_Action.findMany({
        include: {
            _count: {
                select: {
                    volunteers: true
                }
            }
        }
    });

    if(actions.length === 0) {
        throw new AppError("Action not found.", 404);
    }

    return actions.map((action) => ({
        ...action
    }));
}

export async function getActionsByUserId(id: number) {
    const actions = await prisma.cleanup_Action.findMany({
        where: {
             organizer: {
                ID_User: id
            }
        },
        include: {
            _count: {
                select: {
                    volunteers: true
                }
            }
        }
    });

    if (actions.length === 0) {
        throw new AppError("Action not found.", 404);
    }

    return actions.map((action) => ({
        ...action,
    }));
}

export async function getActionById(id: number) {
    const action = await prisma.cleanup_Action.findUnique({
        where: {
                ID_Action: id
        },
        include: {
            _count: {
                select: {
                    volunteers: true
                }
            }
        }
    });

    if (!action) {
        throw new AppError("Action not found.", 404);
    }

    return action;
}

export async function createAction(data: {
    name: string;
    description: string;
    max_volunteers: number;
    action_date: Date;
    action_time: string;
    action_location: string;
}, reportId: number, organizer: number) {
    return await prisma.cleanup_Action.create({
        data: {
            name: data.name,
            description: data.description,
            max_volunteers: data.max_volunteers,
            action_date: data.action_date,
            action_time: data.action_time,
            action_location: data.action_location,
            reports: {
                connect: {
                    ID_Report: reportId,
                },
            },
            organizer:{
                connect: {
                    ID_User: organizer,
                }
            }
        },
    });
}

export async function deleteAction(id: number, organizerId: number) {
    return prisma.cleanup_Action.deleteMany({
        where: {
            ID_Action: id,
            ID_User: organizerId
        }
    });
}

export async function getVolunteersForAction(actionId: number) {
    const action = await prisma.cleanup_Action.findUnique({
        where: { ID_Action: actionId },
        include: {
            volunteers: {
                include: {
                    citizen: {
                        include: {
                            user: {
                                select: {
                                    ID_User: true,
                                    name: true,
                                    surname: true,
                                    username: true,
                                    profile_photo: true
                                }
                            }
                        }
                    }
                }
            }
        }
    });

    if (!action) {
        throw new AppError("Action not found.", 404);
    }

    return action.volunteers.map((registration) => ({
        ID_User: registration.ID_User,
        ID_Action: registration.ID_Action,
        signup_time: registration.signup_time,
        citizen: registration.citizen.user
    }));
}

export async function getActionCapacity(actionId: number) {
    const action = await prisma.cleanup_Action.findUnique({
        where: {ID_Action: actionId},
        include: {
            _count: {
                select: {
                    volunteers: true
                }
            }
        }
    });

    if(!action) {
        throw new AppError("Action not found.", 404);
    }

    const currentVolunteers = action._count.volunteers;

    return {
        ID_Action: action.ID_Action,
        max_volunteers: action.max_volunteers,
        current_volunteers: currentVolunteers,
        available_spots: Math.max(0, action.max_volunteers - currentVolunteers),
        is_full: currentVolunteers >= action.max_volunteers
    };
}

export async function getAllActionsCapacity() {
   const actions = await prisma.cleanup_Action.findMany({
    include: {
        _count:{
            select:{
                volunteers: true
            }
        }
    }
});

return actions.map((action) => ({
        ID_Action: action.ID_Action,
        max_volunteers: action.max_volunteers,
        current_volunteers: action._count.volunteers,
        available_spots: Math.max(0, action.max_volunteers - action._count.volunteers),
        is_full: action._count.volunteers >= action.max_volunteers
}))
}
