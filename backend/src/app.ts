import "dotenv/config";
import express, { NextFunction, Request, Response } from "express";
import morgan from "morgan";
import recipeRoutes from "./routes/recipe-routes";
import createHttpError, { isHttpError } from "http-errors";
import userRouters from "./routes/user-routes";

const app = express();
app.use(express.json());
app.use(morgan("dev"));
app.use("/", recipeRoutes);
app.use("/", userRouters);

app.use((req, res, next) => {
  next(createHttpError(404, "resource not found"));
});

app.use((error: unknown, req: Request, res: Response, next: NextFunction) => {
  let errorMessage = "An unknown error occurred";
  let statusCode = 500;
  if (isHttpError(error)) {
    statusCode = error.status;
    errorMessage = error.message;
  }
  res.status(statusCode).json({ error: errorMessage });
});

export default app;
