import { Request } from "express";
import { signInWithPhoneSchema } from "../../schema/zod";

export const validatePhoneLogin = (req: Request) => {
  try {
    signInWithPhoneSchema.parse(req.body);
    return 1;
  } catch (error) {
    return 0;
  }
};
