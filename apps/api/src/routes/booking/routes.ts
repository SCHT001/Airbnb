import { Router } from "express";
import { addBooking, getBookings, getUserBookings } from "./controller";

const router: Router = Router();

router.get("/", (req, res) => {
  res.send("Hello from booking routes");
});

router.post("/add", (req, res) => {
  return addBooking(req, res);
});

router.get("/:listingId", (req, res) => {
  getBookings(req, res);
});

router.get("/user/:userId", getUserBookings);
export default router;
