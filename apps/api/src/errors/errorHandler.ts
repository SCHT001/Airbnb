import { Response } from "express";

export const HandleError = (res: Response, status: number, error?: any) => {
	if (status == 500) {
		return res.status(500).send({
			status: "failed",
			message: "Internal Server Error",
			error: error,
		});
	}
	if (status == 400) {
		return res.status(400).send({
			status: "failed",
			message: "Bad Request",
			error: error,
		});
	}
	if (status == 401) {
		return res.status(401).send({
			status: "failed",
			message: "Unauthorized",
			error: error,
		});
	}
	if (status == 403) {
		return res.status(403).send({
			status: "failed",
			message: "Forbidden",
			error: error,
		});
	}
	if (status == 404) {
		return res.status(404).send({
			status: "failed",
			message: "Not Found",
			error: error,
		});
	}
	if (status == 409) {
		return res.status(404).send({
			status: "failed",
			message: "Conflict",
			error: error,
		});
	}
};
