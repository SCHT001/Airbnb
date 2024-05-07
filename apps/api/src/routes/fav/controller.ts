import { Request, Response } from "express";
import { HandleError } from "../../errors/errorHandler";
import { prisma } from "../../services/prisma.service";

export const FavouriteController = {
  addFavourite: async (req: Request, res: Response) => {
    try {
      // Check if favourite already exists
      if (
        await prisma.favourite.findFirst({
          where: {
            user_id: req.body.user_id,
            listing_id: req.body.listing_id,
          },
        })
      ) {
        return HandleError(res, 400, "Favourite already exists");
      }
      // Add favourite if it doesn't exist
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
      console.log(error);
      return HandleError(res, 500, error);
    }
  },
  getFavourite: async (req: Request, res: Response) => {
    try {
      const favourites = await prisma.favourite.findMany({
        where: {
          user_id: req.params.userId,
        },
        include: {
          listing: {
            include: {
              images: true,
            },
          },
        },
      });
      return res.status(200).send({
        status: "success",
        message: "Favourite retrived successfully",
        data: favourites,
        error: [],
      });
    } catch (error) {
      return HandleError(res, 500, error);
    }
  },
};
