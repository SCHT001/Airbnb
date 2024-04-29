import { Router } from "express";
import { addBooking } from "./controller";

const router: Router = Router();

router.post("/add", (req, res) => {
  return addBooking(req, res);
});

export default router;
