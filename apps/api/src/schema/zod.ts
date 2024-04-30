import { z } from "zod";

export const signInWithPhoneSchema = z.object({
  name: z.string().min(1, "Name must be at least 1 character"),
  phone: z.string().min(9, "Phone number must be at least 9 characters"),
  countryCode: z.string().min(1, "Country code must be at least 1 character"),
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
