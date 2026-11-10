import { prisma } from "../lib/prisma";

export async function getMyReports(userId: number) {
  return prisma.report.findMany({
    where: {
      ID_User: userId,
    },

    select: {
      ID_Report: true,
      category: true,
      report_status: true,
      Report_date: true,
      GPS_coordinates: true,
    },

    orderBy: {
      Report_date: "desc",
    },
  });
}
export type CreateReportInput = {
  GPS_coordinates: string;
  photos_before: string;
  category: string;
  waste_volume: number;
};

export async function createReport(userId: number, data: CreateReportInput) {
  return prisma.report.create({
    data: {
      GPS_coordinates: data.GPS_coordinates,
      photos_before: data.photos_before,
      photos_after: "",
      category: data.category,
      waste_volume: data.waste_volume,
      report_status: "Prijavljeno",
      Report_date: new Date(),
      citizen: {
        connect: {
          ID_User: userId,
        },
      },
    },
  });
}

export type UpdateReportInput = Partial<CreateReportInput>;

export async function updateReport(userId: number, reportId: number, data: UpdateReportInput) {
  const result = await prisma.report.updateMany({
    where: {
      ID_Report: reportId,
      ID_User: userId,
      report_status: "Prijavljeno",
      ID_Action: null,
      order: {
        none: {},
      },
    },
    data,
  });

  if (result.count === 0) {
    return null;
  }

  return prisma.report.findUnique({
    where: {
      ID_Report: reportId,
    },
  });
}

export async function deleteReport(userId: number, reportId: number): Promise<boolean> {
  const result = await prisma.report.deleteMany({
    where: {
      ID_Report: reportId,
      ID_User: userId,
      report_status: "Prijavljeno",
      ID_Action: null,
      order: {
        none: {},
      },
    },
  });

  return result.count === 1;
}
