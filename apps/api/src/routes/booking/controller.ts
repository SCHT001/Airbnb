import { Request, Response } from "express";

export const addBooking = async (req: Request, res: Response) => {};

function calculateIntermediateDates(fromDate: Date, toDate: Date) {
  // Parse the input strings into Date objects
  const fromDateObj = new Date(fromDate);
  const toDateObj = new Date(toDate);

  // Initialize an array to store intermediate dates
  const intermediateDates = [];

  // Copy the fromDate to avoid modifying the original
  let currentDate = new Date(fromDateObj);

  // Iterate over each date within the interval
  while (currentDate <= toDateObj) {
    intermediateDates.push(currentDate.toISOString().split("T")[0]); // Store the date in yyyy-mm-dd format
    currentDate.setDate(currentDate.getDate() + 1); // Increment the date by one day
  }

  return intermediateDates;
}
