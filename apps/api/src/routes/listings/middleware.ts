import z from "zod";
import { T_listingSchema, listingSchema } from "../../schema/zod";

export const validListing = (listing: T_listingSchema) => {
  try {
    listingSchema.parse(listing);
    return 1;
  } catch (error) {
    console.log(error);
    return 0;
  }
};
