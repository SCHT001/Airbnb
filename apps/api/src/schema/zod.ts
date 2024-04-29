import { z } from "zod";

export const signInWithPhoneSchema = z.object({
  name: z.string().min(1),
  phone: z.string().min(9),
  countryCode: z.string().min(1),
});

export const listingSchema = z.object({
  accommodation: z.string(),
  place_type: z.string(),
  capacity: z.number(),
  bedrooms: z.number(),
  bathrooms: z.number(),
  beds: z.number(),
  title: z.string(),
  description: z.string(),
  host_id: z.string(),
  price: z.number(),
  location: z.string(),
});

export type T_listingSchema = z.infer<typeof listingSchema>;
