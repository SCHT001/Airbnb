import { Router } from "express";
import { updateProfile } from "./controller";

const router: Router = Router();

router.get("/profile", (req, res) => {
  res.send("Profile route");
});

router.post("/profile", (req, res) => {
  updateProfile(req, res);
});

export default router;
