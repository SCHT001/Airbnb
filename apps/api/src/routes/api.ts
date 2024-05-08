import { Router } from "express";
import validateRequest from "../express/validateRequest";
import auth from "./auth/routes";
import bookings from "./booking/routes";
import fav from "./fav/routes";
import listings from "./listings/routes";
import profile from "./profile/routes";
import review from "./review/routes";
import user from "./user/routes";
const router: Router = Router();

router.use("/auth", auth);

router.use("/listings", listings);

router.use("/bookings", bookings);

router.use("/user", user);

router.use("/favourite", fav);

router.use("/profile", validateRequest, profile);

router.use("/review", review);

export default router;
