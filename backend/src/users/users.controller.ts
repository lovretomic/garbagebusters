import { Request, Response } from "express";
import { AppError } from "../error-handling/app.error";
import { getAllUsers as getAllUsersService } from "./users.service";

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
