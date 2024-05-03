import { Router } from "express";
import { updateProfile } from "./controller";

const router: Router = Router();

router.get("/", (req, res) => {
  res.send("Profile route");
});

router.put("/", (req, res) => {
  updateProfile(req, res);
});

export default router;
