import { Router } from "express";
import { getLoggedInUser, getUser, uploadPhoto } from "./controller";

const router: Router = Router();

router.get("/", (req, res) => {
  res.send("Welcome to the user route");
});

router.post("/photo", (req, res) => {
  return uploadPhoto(req, res);
});

router.get("/:userId", (req, res) => {
  return getUser(req, res);
});
router.get("/loggedIn", getLoggedInUser);

export default router;
