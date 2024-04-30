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

export const storeToken = async (userId: string, token: string) => {
  try {
    // find if token already exists
    const existingToken = await prisma.token.findFirst({
      where: {
        userId: userId,
      },
    });

    // If token exists, update it
    if (existingToken) {
      await prisma.token.update({
        where: {
          userId: existingToken.userId,
        },
        data: {
          token: token,
        },
      });
      return;
    }

    await prisma.token.create({
      data: {
        userId: userId,
        token: token,
      },
    });
  } catch (e) {
    return console.log("Error storing token: ", e);
  }
};

export const addUser = async (req: Request, res: Response) => {
  try {
    const data = req.body;
    console.log(req.files);

    // Create the user
    const newUser = await prisma.user.create({
      data: data,
    });

    return {
      data: {
        user: newUser,
      },
      error: {},
    };
  } catch (e) {
    // console.log(e);
    return {
      data: {},
      error: {
        message: e,
      },
    };
  }
};

export const uploadPhoto = async (req: Request, res: Response) => {
  try {
    initializeApp(firebaseConfig.firebaseConfig);
    const storage = getStorage();
    const photo: any = req.files?.photo;

    const storageRef = ref(storage, "users/" + photo.name);

    const metadata = {
      contentType: photo.mimetype,
    };
    const snapshot = await uploadBytesResumable(
      storageRef,
      photo.data,
      metadata
    );
    const downloadLink = await getDownloadURL(snapshot.ref);

    res.status(200).send({
      status: "success",
      data: {
        url: downloadLink,
      },
      error: [],
      message: "Photo uploaded successfully",
    });
  } catch (e) {
    HandleError(res, 500, e);
  }
};
