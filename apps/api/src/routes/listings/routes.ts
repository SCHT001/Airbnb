import { Router } from "express";
import { getListings } from "./controller";

const router: Router = Router();

router.get("/", (req, res) => {
	return getListings(req, res);
});

router.post("/", (req, res) => {
	// console.log(req.body);
	console.log(req.files);
	// return addListing(req, res);
});

export default router;
