const port = 9900
import app from './app'
import "dotenv/config";
import mongoose from 'mongoose'
import env from "./util/validationEnv"
console.log(env.MONGOOSE_STRING)
mongoose.connect(env.MONGOOSE_STRING).then(() => {
    console.log("database connected");
    app.listen(port, () => {
      console.log("server is running on port" + port);
    });
  })
  .catch((error) => console.log(error));


