import { prisma } from "../lib/prisma";
import { AppError } from "../error-handling/app.error";

export async function getAllUsers() {
  try {
    return await prisma.app_User.findMany({
      select: {
        ID_User: true,
        name: true,
        surname: true,
        username: true,
        email: true,
      },
    });
  } catch (error) {
    console.error("Error fetching users:", error);

    throw new AppError("Failed to fetch users.", 500);
  }
}
