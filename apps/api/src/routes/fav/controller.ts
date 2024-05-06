import { HandleError } from "@/errors/errorHandler";
import { prisma } from "@/services/prisma.service";
import { Request, Response } from "express";

export const addFavourite = async (req: Request, res: Response) => {
  try {
    await prisma.favourite.create({
      data: {
        user_id: req.body.user_id,
        listing_id: req.body.listing_id,
      },
    });
    res.status(200).send({
      status: "success",
      message: "Favourite added successfully",
      data: [],
      error: [],
    });
  } catch (error) {
    HandleError(res, 500, error);
  }
};

export const getFavourites = async (req: Request, res: Response) => {
  try {
    const favourites = await prisma.favourite.findMany({
      where: {
        user_id: req.params.userId,
      },
    });
    res.status(200).send({
      status: "success",
      message: "Favourites retrieved successfully",
      data: favourites,
      error: [],
    });
  } catch (error) {
    HandleError(res, 500, error);
  }
};
