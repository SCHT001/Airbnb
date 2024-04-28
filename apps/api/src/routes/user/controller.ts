import { Request, Response } from "express";
import { prisma } from "../../services/prisma.service";

export const storeToken = async (userId: string, token: string) => {
  try {
    // find if token already exists
    const existingToken = await prisma.token.findFirst({
      where: {
        userId: userId,
      },
    });

    // If token exists, update it
    if (existingToken) {
      await prisma.token.update({
        where: {
          userId: existingToken.userId,
        },
        data: {
          token: token,
        },
      });
      return;
    }

    await prisma.token.create({
      data: {
        userId: userId,
        token: token,
      },
    });
  } catch (e) {
    return console.log("Error storing token: ", e);
  }
};

export const addUser = async (req: Request, res: Response) => {
  try {
    const data = req.body;

    // Create the user
    const newUser = await prisma.user.create({
      data: data,
    });

    return {
      data: {
        user: newUser,
      },
      error: {},
    };
  } catch (e) {
    // console.log(e);
    return {
      data: {},
      error: {
        message: e,
      },
    };
  }
};
