import { RequestHandler } from "express";
import jwt from "jsonwebtoken";
import createHttpError from "http-errors";
import env from "../util/validationEnv";

const JWT_SECRET = env.JWT_SECRET;

export const authenticateUser: RequestHandler<unknown,unknown,unknown,unknown> = (req, res, next) => {
  const authHeader = req.headers.authorization;

  try {
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      throw createHttpError(401, "Authorization token is missing");
    }

    const token = authHeader.split(" ")[1];
    const decodedToken = jwt.verify(token, JWT_SECRET) as { id: string };

    if (!decodedToken || !decodedToken.id) {
      throw createHttpError(401, "Invalid token, please log in again");
    }

    req.userId = decodedToken.id;
    next();
  } catch (error) {
    next(error);
  }
};
