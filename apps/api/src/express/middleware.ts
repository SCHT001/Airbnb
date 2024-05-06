import cookieParser from "cookie-parser";
import cors from "cors";
import express, { Application } from "express";
import fileUpload from "express-fileupload";
import morgan from "morgan";
export const useMiddleware = (app: Application) => {
  app.use(
    cors({
      origin: true,
      credentials: true,
    })
  );
  app.use(cookieParser());
  app.use(express.json());
  app.use(morgan("dev"));
  app.use(
    fileUpload({
      useTempFiles: false,
      tempFileDir: "/tmp/",
      abortOnLimit: true,
      limits: { fileSize: 50 * 1024 * 1024, files: 10 },
      responseOnLimit: "File size limit has been reached",
      uploadTimeout: 10000, // 10 seconds
    })
  );
};
