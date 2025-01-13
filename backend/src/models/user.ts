import { InferSchemaType, model, Schema } from "mongoose";

const userSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true }, // Fixed typo here
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

type userProps = InferSchemaType<typeof userSchema>

export default model<userProps>('User', userSchema)