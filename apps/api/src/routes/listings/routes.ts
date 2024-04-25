import { Router } from "express";
import { addListing, getListings, uploadToFirebase } from "./controller";

const router: Router = Router();

router.get("/", (req, res) => {
	return getListings(req, res);
});

router.post("/", (req, res) => {
	return addListing(req, res);
});

router.post("/photos", (req, res) => {
	return uploadToFirebase(req, res);
});

export default router;
