import { Request, Response } from "express";
import { prisma } from "../../services/prisma.service";

export const storeToken = async (userId: string, token: string) => {
	try {
		const newToken = await prisma.token.create({
			data: {
				userId: userId,
				token: token,
			},
		});
	} catch (e) {
		return console.log("Error storing token: ", e);
	}
};

export const addUser = async (req: Request, res: Response) => {
	try {
		const data = req.body;

		// Create the user
		const newUser = await prisma.user.create({
			data: data,
		});

		return {
			data: {
				user: newUser,
			},
			error: {},
		};
	} catch (e) {
		return {
			data: {},
			error: {
				message: e,
			},
		};
	}
};
