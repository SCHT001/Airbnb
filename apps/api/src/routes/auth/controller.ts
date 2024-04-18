import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { HandleError } from "../../errors/errorHandler";
import { prisma } from "../../services/prisma.service";
import { User } from "../../types";
import { addUser, storeToken } from "../user/controller";

// Sign in user with creadentials
export const signIn = async (req: Request, res: Response) => {
	const data: User = req.body;
	try {
		const user = await prisma.user.findFirst({
			where: {
				email: data.email,
			},
		});

		if (!user) {
			HandleError(res, 404, "User not found");
		}

		if (user) {
			const secret: string = process.env.JWT_SECRET!;

			const token = jwt.sign({ email: user.email }, secret);

			await prisma.token.create({
				data: {
					userId: user?.id,
					token: token,
				},
			});

			// Set cookie with token
			res.cookie("token", token, {
				httpOnly: true,
			});

			return res.status(200).send({
				status: "success",
				data: {
					token: token,
				},
				message: "User signed in successfully",
				error: [],
			});
		}
	} catch (e) {
		console.log(e);
		return HandleError(res, 500, e);
	}
};

// Sign in user with provider
const signInWithProvider = async (req: Request, res: Response) => {
	const data = req.body;
	try {
		const user = await prisma.user.findFirst({
			where: {
				email: data.email,
			},
		});

		if (!user) {
			return HandleError(res, 404, "User not found");
		}

		const secret: string = process.env.JWT_SECRET!;
		const token = jwt.sign({}, secret);

		return res.status(200).send({
			status: "success",
			data: user,
			error: [],
		});
	} catch (e) {
		console.log(e);
		return HandleError(res, 500, e);
	}
};

// Sign in user with phone number

export const signInWithPhone = async (req: Request, res: Response) => {
	const data: User = req.body;

	let user = await prisma.user.findFirst({
		where: {
			phone: data.phone,
		},
	});

	if (!user) {
		const createdUser = await addUser(req, res);
		user = createdUser.data.user!;
	}

	// If user is created, sign in

	if (user) {
		// Generate token
		const secret: string = process.env.JWT_SECRET!;
		const token = jwt.sign({ phone: user.phone }, secret);

		// set cookie with token
		res.cookie("token", token, {
			httpOnly: true,
		});

		// Store token in database
		await storeToken(user.id, token);

		return res.status(200).send({
			status: "success",
			data: {
				token: token,
			},
			error: [],
		});
	} else {
		return HandleError(res, 500, "Something went wrong. Please try again.");
	}
};
