import { Router } from "express";
import auth from "./auth/routes";
import bookings from "./booking/routes";
import listings from "./listings/routes";
import profile from "./profile/routes";
import user from "./user/routes";
const router: Router = Router();

router.use("/auth", auth);

router.use("/listings", listings);

// router.use(validateRequest);

router.use("/bookings", bookings);

router.use("/user", user);

router.use("/profile", profile);

export default router;
