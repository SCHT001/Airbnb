import { Router } from "express";
import { addFavourite, getFavourites } from "./controller";

const router: Router = Router();

router.get("/", (req, res) => {
  res.send("Favourite route");
});
router.post("/", (req, res) => {
  addFavourite(req, res);
});

router.get("/:userId", (req, res) => {
  getFavourites(req, res);
});

export default router;
