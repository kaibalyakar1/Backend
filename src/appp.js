import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
const appp = express();

appp.use(
  cors({
    origin: process.env.CORS_ORIGIN,
  })
);

appp.use(express.json({ limit: "16kb" }));
appp.use(express.urlencoded({ extended: true, limit: "16kb" }));
appp.use(express.static("public"));
appp.use(cookieParser());

import userRouter from "./routes/user.routes.js";

//routes declaration
appp.use("/api/v1/users", userRouter);

export { appp };
