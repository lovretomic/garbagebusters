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

    return prisma.volunteers.create(
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

export async function unregisterVolunteer(userId: number, actionId: number) {
    const registration = await prisma.volunteers.findUnique({where:
        {ID_User_ID_Action: {
            ID_Action:actionId,
            ID_User: userId
        }}
    });

    if(!registration) 
        throw new Error("REGISTRATION_NOT_FOUND")
    

    return prisma.volunteers.delete({where: {
        ID_User_ID_Action:{
            ID_User: userId,
            ID_Action: actionId
        }
    }})
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
        throw new Error("ACTION_NOT_FOUND");
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

