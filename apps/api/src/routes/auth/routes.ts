import { Router } from "express";
import { addUser, signIn } from "./controller";

const router: Router = Router();
router.post("/signIn", (req, res) => {
	return signIn(req, res);
});

router.post("/addUser", (req, res) => {
	return addUser(req, res);
});

export default router;
