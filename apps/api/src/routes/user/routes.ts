import { Router } from "express";
import { uploadPhoto } from "./controller";

const router: Router = Router();

router.get("/", (req, res) => {
  res.send("Welcome to the user route");
});

router.post("/photo", (req, res) => {
  return uploadPhoto(req, res);
});
export default router;
