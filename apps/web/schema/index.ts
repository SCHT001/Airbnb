import { z } from "zod";

export const LoginFormSchema = z.object({
	countryCode: z.string().nonempty("Please select a country "),
	phone: z.coerce
		.number()
		.min(1000000000, "Invalid number. Please enter a valid number")
		.max(999999999999, "Invalid number. Please enter a valid number"),
});

export type T_LoginForm = z.infer<typeof LoginFormSchema>;
