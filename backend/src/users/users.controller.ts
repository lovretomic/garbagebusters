import { Request, Response } from "express";
import { AppError } from "../error-handling/app.error";
import {
  getAllUsers as getAllUsersService,
  createAdminUser as createAdminUserService,
} from "./users.service";

export async function getAllUsers(req: Request, res: Response) {
  try {
    const users = await getAllUsersService();

    res.status(200).json(
      users.map((user) => ({
        ...user,
        id: user.ID_User,
      })),
    );
  } catch (error) {
    if (error instanceof AppError) {
      return res.status(error.statusCode).json({
        message: error.message,
      });
    }

    res.status(500).json({
      message: "Can't fetch users.",
    });
  }
}

export async function createAdminUser(req: Request, res: Response) {
  const { name, surname, username, email, password } = req.body ?? {};

  if (
    typeof name !== "string" ||
    !name.trim() ||
    typeof username !== "string" ||
    !username.trim() ||
    typeof email !== "string" ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim()) ||
    typeof password !== "string" ||
    password.length < 12 ||
    (surname != null && typeof surname !== "string")
  ) {
    return res.status(400).json({
      message: "Invalid user data. Password must have at least 12 characters.",
    });
  }

  try {
    const user = await createAdminUserService({
      name: name.trim(),
      surname: surname?.trim() || undefined,
      username: username.trim(),
      email: email.trim().toLowerCase(),
      password,
    });

    return res.status(201).json({
      ...user,
      id: user.ID_User,
    });
  } catch (error) {
    if (error instanceof Error && "code" in error && error.code === "P2002") {
      return res.status(409).json({
        message: "Username or email already exists.",
      });
    }

    console.error("Failed to create administrator:", error);

    return res.status(500).json({
      message: "Failed to create administrator.",
    });
  }
}
