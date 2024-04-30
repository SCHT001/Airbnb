import { z } from "zod";

export const LoginFormSchema = z.object({
  countryCode: z.string().nonempty("Please select a country "),
  phone: z.coerce
    .number()
    .min(1000000000, "Invalid number. Please enter a valid number")
    .max(999999999999, "Invalid number. Please enter a valid number"),
});

export const nameSchema = z.object({
  name: z.string().min(1, "Name is required"),
});

export type T_LoginForm = z.infer<typeof LoginFormSchema>;
export type T_NameForm = z.infer<typeof nameSchema>;

export const listingInputSchema = z.object({
  accommodation: z.string().min(1, "Please select one option"),
  placeType: z.string().min(1, "Please select one place type"),
  availabilities: z.object({
    guests: z.number().min(1, "Please specify available guest capacity"),
    bedrooms: z.number().min(1, "Please specify available bedrooms"),
    beds: z.number().min(1, "Please specify available beds"),
    bathrooms: z.number().min(1, "Please specify available bathrooms"),
  }),
  photos: z.any(),
  title: z.string().min(1, "Title is required"),
  description: z.string().min(1, "Description is required"),
  price: z.coerce.number().min(1, "Price is required"),
});

export type T_ListingInput = z.infer<typeof listingInputSchema>;
