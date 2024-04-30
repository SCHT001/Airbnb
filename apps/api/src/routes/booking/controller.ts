import { Request, Response } from "express";
import { HandleError } from "../../errors/errorHandler";
import { prisma } from "../../services/prisma.service";

export const addBooking = async (req: Request, res: Response) => {
  try {
    console.log(req.body);
    const data = req.body;

    const listingId = data.listing_id;

    // Calculate the intermediate dates between the fromDate and toDate
    const intermediateDates = calculateIntermediateDates(
      new Date(data.range.from),
      new Date(data.range.to)
    );

    // find if the dates are already booked

    const bookingsPromises = intermediateDates.map(async (date) => {
      const booking = await prisma.availability.findFirst({
        where: { listing_id: listingId, date: date },
      });
      return booking;
    });

    const bookings = await Promise.all(bookingsPromises);

    // Check if any booking exists
    if (bookings.some((booking) => booking !== null)) {
      return HandleError(res, 400, "Room is already booked");
    }

    // if the room is available, book the room
    intermediateDates.forEach(async (date) => {
      await prisma.availability.create({
        data: {
          listing_id: listingId,
          date: date,
          is_booked: true,
        },
      });
    });

    return res.status(200).json({
      message: "Room booked successfully",
    });
  } catch (e) {
    return HandleError(res, 500, "Error while booking room");
  }
};

function calculateIntermediateDates(startDate: Date, endDate: Date) {
  // Convert the provided strings to Date objects
  const start = new Date(startDate);
  const end = new Date(endDate);

  // Calculate the difference in milliseconds between the two dates
  console.log(start.getTime(), end.getTime());
  const difference = end.getTime() - start.getTime();

  // Calculate the number of milliseconds in a day
  const oneDay = 24 * 60 * 60 * 1000;

  // Store the intermediate dates
  const intermediateDates = [];

  // Loop through and calculate the intermediate dates
  for (let i = 1; i < difference / oneDay; i++) {
    const intermediateDate = new Date(start.getTime() + i * oneDay);
    intermediateDates.push(intermediateDate.toISOString());
  }
  return intermediateDates;
}
