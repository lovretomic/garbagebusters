import { prisma } from "../lib/prisma";

export async function getMyReports(userId: number) {

    return prisma.report.findMany({
        where: {
            ID_User: userId
        },

        select: {
            ID_Report: true,
            category: true,
            report_status: true,
            Report_date: true,
            GPS_coordinates: true
        },

        orderBy: {
            Report_date: "desc"
        }
    });
}
