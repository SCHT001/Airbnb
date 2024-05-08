import { Router } from "express";
import { ReviewController } from "./controller";

const router = Router();

router.get("/", async (req, res) => {
  res.send("From review route");
});

router.get("/:listingId", ReviewController.get);

router.post("/", ReviewController.add);

export default router;
