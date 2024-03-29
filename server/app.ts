require("dotenv").config();
import express, { NextFunction, Request, Response } from "express";
export const app = express();
import cors from "cors";
import cookieParser from "cookie-parser";
import { ErrorMiddleware } from "./middleware/error";
import userRouter from "./routes/user.route";
import courseRouter from "./routes/course.route";
import orderRouter from "./routes/order.route";
import notificationRoute from "./routes/notification.route";
import analyticsRouter from "./routes/analytics.route";
import layoutRouter from "./routes/layout.route";

// body parser for parsing incoming requests

app.use(express.json({ limit: "50mb" })); // limit is used to limit the size of the incoming request

// cookie parser for parsing cookies

app.use(cookieParser());

// cors => cross origin resource sharing

app.use(
  cors({
    origin: ['http://localhost:3000'], // process is used to access the environment variables in the.env file
    credentials: true,
  })
);

// routes

app.use("/api/v1", userRouter, courseRouter, orderRouter, notificationRoute,analyticsRouter,layoutRouter);

// test our api

app.get("/test", (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({
    success: true,
    message: "Api is working fine",
  });
});

// for users trying to access the website from unknown domains

app.all("*", (req: Request, res: Response, next: NextFunction) => {
  //the below commented code is generated by ai....
  // res.status(404).json({
  //     success: false,
  //     message: "Page not found"
  // });
  const err = new Error(`Route ${req.originalUrl} not found`) as any;
  err.status = 404;
  next(err);
});

app.use(ErrorMiddleware);
