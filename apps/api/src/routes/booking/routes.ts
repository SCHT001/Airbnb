import { Router } from "express";
import { addBooking, getBookings } from "./controller";

const router: Router = Router();

router.post("/add", (req, res) => {
  return addBooking(req, res);
});

router.get("/:listingId", (req, res) => {
  getBookings(req, res);
});
export default router;
