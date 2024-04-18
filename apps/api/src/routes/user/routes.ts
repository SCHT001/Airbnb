import { Router } from "express";

const router: Router = Router();

router.get("/", (req, res) => {
	res.send("Welcome to the user route");
});

export default router;
