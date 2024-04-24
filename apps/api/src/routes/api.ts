import { Router } from "express";
import multer from "multer";
import auth from "./auth/routes";
import listings from "./listings/routes";

const upload = multer({ dest: "uploads/" });

const router: Router = Router();

router.use("/auth", auth);

router.use("/listings", upload.single("avatar"), listings);

export default router;
