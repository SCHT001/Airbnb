import { Request, Response } from "express";
import { HandleError } from "../../errors/errorHandler";
import { prisma } from "../../services/prisma.service";

export const updateProfile = async (req: Request, res: Response) => {
  try {
    const userData: {
      id: string;
      name: string;
      phone: string;
      email?: string;
    } = req.body;

    const newUserData = await prisma.user.update({
      where: {
        id: userData.id,
      },
      data: {
        phone: userData.phone,
        name: userData.name,
        email: userData.email,
      },
    });

    res.status(200).json({
      status: "success",
      data: newUserData,
      error: [],
      message: "Profile updated successfully",
    });
  } catch (error) {
    return HandleError(res, 500, "Internal server error");
  }
};
