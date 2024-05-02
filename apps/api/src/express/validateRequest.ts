import { NextFunction, Request, Response } from "express";
import { HandleError } from "../errors/errorHandler";
import { prisma } from "../services/prisma.service";

const validateRequest = (req: Request, res: Response, next: NextFunction) => {
  try {
    const requestCookie = req.cookies("token");
    if (!requestCookie) {
      return HandleError(res, 401, "Unauthorized");
    }
    const token = prisma.token.findFirst({
      where: {
        token: requestCookie,
      },
    });
    if (!token) {
      return HandleError(res, 401, "Unauthorized");
    }
    next();
  } catch (e) {
    return HandleError(res, 401, "Unauthorized");
  }
};
export default validateRequest;
