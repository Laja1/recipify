import { cleanEnv, port, str } from "envalid";

export default cleanEnv(process.env, {
  MONGOOSE_STRING: str(),
  JWT_SECRET:str()
});
