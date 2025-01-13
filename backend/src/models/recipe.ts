import mongoose, { InferSchemaType, model, Schema } from "mongoose";

const recipeSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, required: true },
  recipeName: { type: String, required: true },
  recipeImage: { type: String, required: true },
  recipeDescription: { type: String, required: true },
});

type Recipe = InferSchemaType<typeof recipeSchema>;

export default model<Recipe>("recipe", recipeSchema);
