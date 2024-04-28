import z from "zod";

export const signInWithPhoneSchema = z.object({
  name: z.string().min(1),
  phone: z.string().min(9),
  countryCode: z.string().min(1),
});
