import { Request, Response } from "express";
import { HandleError } from "../../errors/errorHandler";
import { prisma } from "../../services/prisma.service";

export const ReviewController = {
  get: async (req: Request, res: Response) => {
    try {
      const listingId = req.params.listingId;

      const reviews = await prisma.review.findMany({
        where: {
          listing_id: listingId,
        },
      });

      res.status(200).json({
        status: "success",
        data: reviews,
        message: "Reviews fetched successfully",
        error: [],
      });
    } catch (e) {
      HandleError(res, 500, e);
    }
  },
  add: async (req: Request, res: Response) => {
    try {
      const data: {
        userId: string;
        listingId: string;
        rating: number;
        comment: string;
      } = req.body;

      //   find if exists

      const reviewExists = await prisma.review.findFirst({
        where: {
          user_id: data.userId,
          listing_id: data.listingId,
        },
      });
      if (reviewExists) return HandleError(res, 400, "Review already exists");

      const review = await prisma.review.create({
        data: {
          user_id: data.userId,
          rating: data.rating,
          comment: data.comment,
          listing_id: data.listingId,
        },
      });

      return res.status(201).json(review);
    } catch (e) {
      return HandleError(res, 500, e);
    }
  },
};
