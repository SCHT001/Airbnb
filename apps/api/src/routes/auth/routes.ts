import { Router } from "express";
import { signIn, signInWithPhone } from "./controller";

const router: Router = Router();
router.post("/signIn/email", (req, res) => {
  return signIn(req, res);
});

router.post("/signIn/provider", (req, res) => {});

router.post("/signIn/phone", (req, res) => {
  console.log("here");
  return signInWithPhone(req, res);
});

export default router;
