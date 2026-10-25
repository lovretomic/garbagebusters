import prisma from '../lib/prisma.js';

export async function getActions() {
    return prisma.cleanup_Action.findMany();
}

export async function getActionById(id: string) {
    return prisma.cleanup_Action.findUnique({
        where: { ID_Report: id }
    });
}

export async function createAction(data: {
    name: string;
    description: string;
    max_volunteers: number;
    action_date: Date;
    action_time: string;
}, reportId: string) {
    return await prisma.cleanup_Action.create({
        data: {
            name: data.name,
            description: data.description,
            max_volunteers: data.max_volunteers,
            action_date: data.action_date,
            action_time: data.action_time,
            report: {
                connect: {
                    ID_Report: reportId,
                },
            },
        },
    });
}

export async function deleteAction(id: string) {
    return prisma.cleanup_Action.delete({where: {ID_Report: id}})
}


