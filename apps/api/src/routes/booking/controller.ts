import { Request, Response } from "express";
import { HandleError } from "../../errors/errorHandler";
import { prisma } from "../../services/prisma.service";
import { calculateIntermediateDates } from "./helpers";

export const addBooking = async (req: Request, res: Response) => {
  try {
    console.log(req.body);
    const data = req.body;

    const listingId = data.listing_id;
    const userId = data.user_id;

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

    // get the listing details

    const listing = await prisma.listing.findFirst({
      where: {
        id: listingId,
      },
    });

    // calculate total price
    const totalPrice = intermediateDates.length * listing?.price!;

    // store the booking in the bookings table
    await prisma.bookings.create({
      data: {
        listing_id: listingId,
        user_id: userId,
        check_in_date: new Date(data.range.from),
        check_out_date: new Date(data.range.to),
        status: "booked",
        total_price: totalPrice,
      },
    });

    return res.status(200).json({
      message: "Room booked successfully",
    });
  } catch (e) {
    return HandleError(res, 500, "Error while booking room");
  }
};

export const getBookings = async (req: Request, res: Response) => {
  try {
    const listingId = req.params.listingId;
    console.log(listingId);
    const bookings = await prisma.availability.findMany({
      where: {
        listing_id: listingId,
      },
    });
    return res.status(200).json({
      bookings,
    });
  } catch (e) {
    return HandleError(res, 500, "Error while fetching bookings");
  }
};
