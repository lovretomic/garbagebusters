import { prisma } from '../lib/prisma';

export async function getActions() {
    return prisma.cleanup_Action.findMany();
}

export async function getActionById(id: number) {
    return prisma.cleanup_Action.findUnique({
        where: { ID_Action: id }
    });
}

export async function createAction(data: {
    name: string;
    description: string;
    max_volunteers: number;
    action_date: Date;
    action_time: string;
    action_location: string;
}, reportId: string) {
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
        },
    });
}

export async function deleteAction(id: number) {
    return prisma.cleanup_Action.delete({where: {ID_Action: id}})
}


