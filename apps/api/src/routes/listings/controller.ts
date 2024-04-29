import { Request, Response } from "express";
import { initializeApp } from "firebase/app";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import firebaseConfig from "../../config/firebase.config";
import { HandleError } from "../../errors/errorHandler";
import { prisma } from "../../services/prisma.service";
import { validListing } from "./middleware";

export const getListings = async (req: Request, res: Response) => {
  try {
    const listings = await prisma.listing.findMany({
      include: {
        images: true,
      },
    });

    res.status(200).send({
      status: "success",
      data: listings,
      message: "Listings retrieved successfully",
    });
  } catch (err) {
    HandleError(res, 500, err);
  }
};

export const addListing = async (req: Request, res: Response) => {
  if (!validListing(req.body)) {
    return HandleError(res, 400, "Invalid listing data");
  }

  try {
    const data = req.body;
    const newListing = await prisma.listing.create({
      data: data,
    });

    return res.status(201).send({
      status: "success",
      data: newListing,
      message: "Listing created successfully",
    });
  } catch (err) {
    console.log(err);
    return HandleError(res, 500, err);
  }
};

// Firebase upload

export const uploadToFirebase = async (req: Request, res: Response) => {
  try {
    initializeApp(firebaseConfig.firebaseConfig);
    const storage = getStorage();
    const photos: any = req.files?.photo;
    const listingId = req.body.listing_id;

    photos.forEach(async (photo: any) => {
      const storageRef = ref(
        storage,
        "listings/" + listingId + "/" + photo.name
      );
      console.log(photo.mimetype);
      const metadata = {
        contentType: photo.mimetype,
      };

      const snapshot = await uploadBytesResumable(
        storageRef,
        photo.data,
        metadata
      );

      const downloadLink = await getDownloadURL(snapshot.ref);

      await prisma.listing_image.create({
        data: {
          listingId: listingId,
          url: downloadLink,
        },
      });
    });
  } catch (err) {
    return HandleError(res, 500, err);
  }
};

export const getSingleListing = async (req: Request, res: Response) => {
  const listingId = req.params.listingId;
  console.log(listingId);

  try {
    const listing = await prisma.listing.findFirst({
      where: {
        id: listingId,
      },
      include: {
        images: true,
      },
    });

    res.status(200).send({
      status: "success",
      data: listing,
      error: [],
      message: "Listing retrieved successfully",
    });
  } catch (err) {
    HandleError(res, 500, err);
  }
};
