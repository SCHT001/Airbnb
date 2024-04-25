import { Router } from "express";
import {
	addListing,
	getListings,
	getPhotos,
	uploadToFirebase,
} from "./controller";

const router: Router = Router();

router.get("/", (req, res) => {
	return getListings(req, res);
});

router.post("/", (req, res) => {
	// console.log(req.body);
	// console.log(req.files);
	return addListing(req, res);
});

// router.post("/photos", (req, res) => {
// 	return addListingPhotos(req, res);
// });

router.get("/photos/:listing_id", (req, res) => {
	return getPhotos(req, res);
});

router.post("/photos", (req, res) => {
	return uploadToFirebase(req, res);
});

export default router;
