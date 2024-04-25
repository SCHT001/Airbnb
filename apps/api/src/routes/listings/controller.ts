import { Request, Response } from "express";
import fs from "fs";
import { join } from "path";
import firebaseConfig from "../../config/firebase.config";
import { HandleError } from "../../errors/errorHandler";
import { prisma } from "../../services/prisma.service";

export const getListings = async (req: Request, res: Response) => {
	try {
		const listings = await prisma.listing.findMany({});

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

export const addListingPhotos = async (req: Request, res: Response) => {
	try {
		const photos: any = req.files?.photo;
		const listingId = req.body.listing_id;

		photos.forEach((photo: any) => {
			const fileName = `${listingId}_${photo.name}`;

			const folderPath = join(
				__dirname,
				"..",
				"..",
				"..",
				"uploads",
				"listings",
				listingId
			);
			console.log(__dirname, folderPath, fileName);

			if (!fs.existsSync(folderPath)) {
				fs.mkdirSync(folderPath);
			}

			const filePath = join(
				__dirname,
				"..",
				"..",
				"..",
				"uploads",
				"listings",
				listingId,
				fileName
			);

			photo.mv(filePath, (err: any) => {
				if (err) {
					console.log(err);
				}
			});
		});

		return res.status(201).send({
			status: "success",
			data: [],
			error: [],
			message: "Photos uploaded successfully",
		});
	} catch (err) {
		return HandleError(res, 500, err);
	}
};
export const getPhotos = async (req: Request, res: Response) => {
	try {
		const listingId = req.params.listing_id;

		const listingPhotosDir = join(
			__dirname,
			"..",
			"..",
			"..",
			"uploads",
			"listings",
			listingId!
		);

		if (!fs.existsSync(listingPhotosDir)) {
			return res.status(404).send({ error: "Listing has no photos" });
		}

		const fileNames = fs.readdirSync(listingPhotosDir);

		const filePaths = fileNames.map((fileName) =>
			join(listingPhotosDir, fileName)
		);

		if (filePaths.length === 0) {
			return res.status(404).send({ error: "Listing has no photos" });
		}

		filePaths.forEach((filePath) => {
			const fileStream = fs.createReadStream(filePath);
			fileStream.pipe(res);
		});

		res.on("finish", () => {
			console.log("All photos sent");
		});
	} catch (err) {
		console.error(err);
		return res.status(500).send({ error: "Internal server error" });
	}
};

// Firebase upload
import { initializeApp } from "firebase/app";
import {
	getDownloadURL,
	getStorage,
	ref,
	uploadBytesResumable,
} from "firebase/storage";

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
			const snapshot = await uploadBytesResumable(storageRef, photo.buffer);

			const downloadLink = await getDownloadURL(snapshot.ref);

			console.log(downloadLink);
		});
	} catch (err) {
		return HandleError(res, 500, err);
	}
};
