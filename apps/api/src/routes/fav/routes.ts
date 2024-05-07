import { Request, Response, Router } from "express";
import { FavouriteController } from "./controller";

const router: Router = Router();

router.get("/", (req: Request, res: Response) => {
  res.send("Favourite route");
});

router.post("/", FavouriteController.addFavourite);

router.get("/:userId", FavouriteController.getFavourite);

export default router;
