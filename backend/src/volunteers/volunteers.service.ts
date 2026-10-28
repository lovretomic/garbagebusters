import { prisma } from "../lib/prisma";

export async function registerVolunteer(actionId:number, userId:number) {
    const citizen = prisma.citizen.findUnique(
        {where: {ID_User: userId}}
    );

    if(!citizen){
         throw new Error('CITIZEN_NOT_FOUND');
    }

    const action = await prisma.cleanup_Action.findUnique({
        where: {ID_Action: actionId},
        include: {
            volunteers: true
        }
    })

    if(!action){
         throw new Error('ACTION_NOT_FOUND');
    }

    if(action.volunteers.length >= action.max_volunteers){
        throw new Error('ACTION_FULL')
    }

    return prisma.action_Volunteer.create(
        {data: {
             ID_User: userId,
             ID_Action: actionId
        }
        }
    );
}

export async function getVolunteersForAction(actoinId: number) {
    const action = await prisma.cleanup_Action.findUnique({where: {ID_Action: actoinId},
        include: {
            volunteers: {
                include: {
                    citizen: {
                        include: {
                            user: true
                        }
                    }
                }
            }
        }

    });

    if(!action){
         throw new Error('ACTION_NOT_FOUND');
    }

    return action.volunteers.map((registration) => ({
        ID_User: registration.ID_User,
        ID_Action: registration.ID_Action,
        signup_time: registration.signup_time,
        citizen: registration.citizen.user
    }));
}

export async function getActionsForVolunteers(userId: number) {
    const citizen = await prisma.citizen.findUnique({where: {
        ID_User: userId
    }, include: {
        volunteer_actions: {
            include: {
                action: true
            }
        }
    }});

    if(!citizen){
         throw new Error('CITIZEN_NOT_FOUND');
    }

    return citizen.volunteer_actions.map((registration) => ({
        ID_User: registration.ID_User,
        ID_Action: registration.ID_Action,
        signup_time: registration.signup_time,
        action: registration.action
    }));
}

