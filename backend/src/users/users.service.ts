import { prisma } from "../lib/prisma";
import { AppError } from "../error-handling/app.error";
import { hashPassword } from "../auth/password";

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

export async function createAdminUser(data: {
  name: string;
  surname?: string;
  username: string;
  email: string;
  password: string;
}) {
  return prisma.app_User.create({
    data: {
      name: data.name,
      surname: data.surname,
      username: data.username,
      email: data.email,
      password: await hashPassword(data.password),
      admin: {
        create: {},
      },
    },
    select: {
      ID_User: true,
      name: true,
      surname: true,
      username: true,
      email: true,
    },
  });
}
