import { RequestHandler } from "express";
import createHttpError from "http-errors";
import recipeModel from "../models/recipe";
import mongoose from "mongoose";
import { getRecipeProps, recipeProps } from "../types/recipe-types";

export const createRecipe: RequestHandler<
  unknown,
  unknown,
  recipeProps,
  unknown
> = async (req, res, next) => {
  const { recipeName, recipeDescription, recipeImage } = req.body;

  try {
    if (!recipeName) {
      throw createHttpError(400, "Recipe name is missing");
    }

    if (!recipeDescription) {
      throw createHttpError(400, "Recipe description is missing");
    }

    if (!recipeImage) {
      throw createHttpError(400, "Recipe image is missing");
    }

    if (!req.userId) {
      throw createHttpError(401, "Unauthorized request: User ID is missing");
    }

    const recipe = await recipeModel.create({
      userId: req.userId,
      recipeDescription,
      recipeImage,
      recipeName,
    });

    res.status(200).json(recipe);
  } catch (error) {
    next(error);
  }
};


export const getRecipe: RequestHandler<getRecipeProps> = async (
  req,
  res,
  next
) => {
  const recipeId = req.params.recipeId;
  try {
    if (!mongoose.isValidObjectId(recipeId)) {
      throw createHttpError(404, "request not found");
    }
    const recipe = await recipeModel.findById(recipeId).exec();
    if (!recipe) {
      throw createHttpError(404, "recipe not found");
    }
    res.status(200).json(recipe);
  } catch (error) {
    next(error);
  }
};

export const getAllRecipes: RequestHandler = async (req, res, next) => {
  try {
    const recipe = await recipeModel.find().exec();
    if (!recipe) {
      throw createHttpError(404, "recipe not found");
    }
    res.status(200).json(recipe);
  } catch (error) {
    next(error);
  }
};
