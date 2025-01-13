import express from "express";
import * as recipecontroller from "../controllers/recipe-controller";
import { authenticateUser } from "../middleware/authenticator";
const router = express.Router();
router.get("/get-all-recipe", recipecontroller.getAllRecipes);
router.get("/:recipeId", recipecontroller.getRecipe);
router.post("/create-recipe", authenticateUser, recipecontroller.createRecipe);

export default router;
