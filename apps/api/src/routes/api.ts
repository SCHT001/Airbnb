import { Router } from "express";
import auth from "./auth/routes";
import listings from "./listings/routes";

const router: Router = Router();
router.use("/auth", auth);
router.use("/listings", listings);
export default router;
