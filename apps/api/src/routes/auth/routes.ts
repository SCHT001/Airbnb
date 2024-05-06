import { Router } from "express";
import { signIn, signInWithPhone, signOut } from "./controller";

const router: Router = Router();
router.post("/signIn/email", (req, res) => {
  return signIn(req, res);
});

router.post("/signIn/provider", (req, res) => {});

router.post("/signIn/phone", (req, res) => {
  return signInWithPhone(req, res);
});

router.delete("/signOut/:userId", (req, res) => {
  return signOut(req, res);
});

export default router;
