import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { HandleError } from "../../errors/errorHandler";
import { prisma } from "../../services/prisma.service";
import { User } from "../../types";

export const signIn = async (req: Request, res: Response) => {
	const data: User = req.body;
	try {
		const user = await prisma.user.findFirst({
			where: {
				email: data.email,
				password: data.password,
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

export const addUser = async (req: Request, res: Response) => {
	const data = req.body;
	// const data:User=req.body
	try {
		// check if user exists
		const existingUser = await prisma.user.findFirst({
			where: {
				email: data.email,
			},
		});

		// Return error if user exists
		if (existingUser) return HandleError(res, 409, "User already exists");

		// Create user if user does not exist
		const user = await prisma.user.create({
			data: data,
		});

		return res.status(201).send({
			status: "success",
			data: user,
			error: [],
		});
	} catch (e) {
		console.log(e);
		return HandleError(res, 500, e);
	}
};
