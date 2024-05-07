import { Request, Response } from "express";
import { HandleError } from "../../errors/errorHandler";
import { prisma } from "../../services/prisma.service";

export const FavouriteController = {
  addFavourite: async (req: Request, res: Response) => {
    try {
      await prisma.favourite.create({
        data: {
          user_id: req.body.user_id,
          listing_id: req.body.listing_id,
        },
      });
      return res.status(200).send({
        status: "success",
        message: "Favourite added successfully",
        data: [],
        error: [],
      });
    } catch (error) {
      return HandleError(res, 500, error);
    }
  },
  getFavourite: async (req: Request, res: Response) => {
    try {
      await prisma.favourite.create({
        data: {
          user_id: req.body.user_id,
          listing_id: req.body.listing_id,
        },
      });
      return res.status(200).send({
        status: "success",
        message: "Favourite added successfully",
        data: [],
        error: [],
      });
    } catch (error) {
      return HandleError(res, 500, error);
    }
  },
};