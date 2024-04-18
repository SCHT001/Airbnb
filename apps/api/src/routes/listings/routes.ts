import { Router } from "express";
import { addListing, getListings } from "./controller";

const router: Router = Router();

router.get("/", (req, res) => {
	return getListings(req, res);
});

router.post("/", (req, res) => {
	return addListing(req, res);
});

export default router;
