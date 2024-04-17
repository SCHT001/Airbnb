import express, { Application } from "express";
import { useMiddleware } from "./middleware";
import { useRoutes } from "./routes";

export const SetupServer = (): Application => {
	const expressApp = express();
	useMiddleware(expressApp);
	useRoutes(expressApp);
	return expressApp;
};
