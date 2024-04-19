import { z } from "zod";

export const LoginFormSchema = z.object({
	countryCode: z.coerce.number(),
	phone: z.coerce.number().min(1000000000).max(99999999999),
});

export type T_LoginForm = z.infer<typeof LoginFormSchema>;
