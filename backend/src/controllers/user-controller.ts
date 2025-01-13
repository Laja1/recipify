import { RequestHandler } from "express";
import createHttpError from "http-errors";
import userModel from "../models/user";
import bcrypt from "bcrypt";
import { loginProps, registerProps } from "../types/user-types";
import jwt from "jsonwebtoken";
import env from "../util/validationEnv";

export const register: RequestHandler<
  unknown,
  unknown,
  registerProps,
  unknown
> = async (req, res, next) => {
  const { firstName, lastName, email, password } = req.body;

  try {
    if (!firstName) {
      throw createHttpError(400, "first name is required");
    }
    if (!lastName) {
      throw createHttpError(400, "last name is required");
    }
    if (!email) {
      throw createHttpError(400, "email is required");
    }
    if (!password) {
      throw createHttpError(400, "password is required");
    }
    const existingUser = await userModel
      .findOne({ email: email })
      .select("+password")
      .exec();
    if (existingUser) {
      throw createHttpError(
        409,
        "User already exists, please use another email"
      );
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await userModel.create({
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: hashedPassword,
    });
    const token = jwt.sign(
      { id: newUser._id, email: newUser.email },
      env.JWT_SECRET,
      {
        expiresIn: "600d",
      }
    );
    res.status(201).json({ user: newUser, token });
  } catch (error) {
    next(error);
  }
};

export const login: RequestHandler<
  unknown,
  unknown,
  loginProps,
  unknown
> = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    if (!email) {
      throw createHttpError(400, "email is required");
    }
    if (!password) {
      throw createHttpError(400, "password is required");
    }
    const existingUser = await userModel
      .findOne({ email: email })
      .select("+password +email")
      .exec();
    if (!existingUser) {
      throw createHttpError(401, "invalid credentials, please try again...");
    }
    const passwordMatch = await bcrypt.compare(password, existingUser.password);
    if (!passwordMatch) {
      throw createHttpError(401, "invalid credentials, please try again...");
    }
    const token = jwt.sign(
      { id: existingUser._id, email: existingUser.email },
      env.JWT_SECRET,
      {
        expiresIn: "600d",
      }
    );
    res.status(201).json({ existingUser, token });
  } catch (error) {
    next(error);
  }
};
