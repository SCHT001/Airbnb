import { Router } from "express";
import auth from "./auth/routes";
import bookings from "./booking/routes";
import listings from "./listings/routes";

const router: Router = Router();

router.use("/auth", auth);

router.use("/listings", listings);

router.use("/bookings", bookings);

export default router;
