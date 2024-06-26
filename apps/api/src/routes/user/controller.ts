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
  // console.log(req.files);
  // console.log(req.body);

  const userId = req.body.userId;
  try {
    // initialize firebase app
    initializeApp(firebaseConfig.firebaseConfig);
    const storage = getStorage();
    const photo: any = req.files?.photo;

    //path for storage in firebase
    const storageRef = ref(storage, `users/${userId}/` + photo.name);

    // photo metadata
    const metadata = {
      contentType: photo.mimetype,
    };

    // Asynchronously upload file to firebase storage
    const snapshot = await uploadBytesResumable(
      storageRef,
      photo.data,
      metadata
    );

    // get download url

    const downloadLink = await getDownloadURL(snapshot.ref);

    await prisma.user.update({
      where: {
        id: req.body.userId,
      },
      data: {
        photo: downloadLink,
      },
    });

    res.status(200).send({
      status: "success",
      data: {
        url: downloadLink,
      },
      error: [],
      message: "Photo uploaded successfully",
    });
  } catch (e) {
    console.log(e);
    HandleError(res, 500, e);
  }
};

export const getUser = async (req: Request, res: Response) => {
  const userId = req.params.userId;

  try {
    const user = await prisma.user.findFirst({
      where: {
        id: userId,
      },
    });

    if (user) {
      return res.status(200).send({
        name: user.name,
        id: user.id,
        email: user.email,
        phone: user.phone,
        countryCode: user.countryCode,
        photo: user.photo,
      });
    } else {
      HandleError(res, 404, "User not found");
    }
  } catch (e) {
    return HandleError(res, 500, "Unable to get user");
  }
};

export const getLoggedInUser = async (req: Request, res: Response) => {
  console.log("here");
  try {
    if (!req.cookies["token"]) return HandleError(res, 401, "Not logged in");

    const requestCookie = req.cookies["token"];

    const user = await prisma.token.findFirst({
      where: {
        token: requestCookie,
      },
      include: {
        user: true,
      },
    });

    return res.status(200).send({
      status: "success",
      data: {
        user: user?.user,
      },
      message: "loged in user retrived",
      error: [],
    });
  } catch (e) {
    return HandleError(res, 500, e);
  }
};
