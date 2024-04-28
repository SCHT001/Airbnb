import z from "zod";

export const signInWithPhoneSchema = z.object({
  name: z.string().min(1),
  phone: z.string().min(9),
  countryCode: z.string().min(1),
});

export const listingSchema = z.object({
  id: z.string().uuid(),
  accommodation: z.string(),
  title: z.string(),
  description: z.string(),
  host_id: z.string().uuid(),
  price: z.string(),
});
