import { Router } from "express";
import fileUpload from "express-fileupload";
import { addListing, getListings } from "./controller";

const router: Router = Router();

router.use(fileUpload());

router.get("/", (req, res) => {
	return getListings(req, res);
});

router.post("/", (req, res) => {
	console.log(req.files);
	return addListing(req, res);
});

export default router;
