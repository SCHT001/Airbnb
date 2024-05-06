import { NextFunction, Request, Response } from "express";
import { HandleError } from "../errors/errorHandler";
import { prisma } from "../services/prisma.service";

const validateRequest = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const requestCookie = req.cookies["token"];
    console.log(requestCookie);
    if (!requestCookie) {
      return HandleError(res, 401, "Unauthorized");
    }
    const token = await prisma.token.findFirst({
      where: {
        token: requestCookie,
      },
    });
    if (!token) {
      return HandleError(res, 401, "Unauthorized");
    }
    next();
  } catch (e) {
    console.error("Error validating request:", e);
    return HandleError(res, 401, "Unauthorized");
  }
};

export default validateRequest;
