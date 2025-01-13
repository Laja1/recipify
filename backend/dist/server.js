"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const port = 9900;
const app = (0, express_1.default)();
const mongoose_1 = __importDefault(require("mongoose"));
const validationEnv_1 = __importDefault(require("./util/validationEnv"));
mongoose_1.default.connect(validationEnv_1.default.MONGOOSE_STRING).then(() => {
    console.log("database connected");
    app.listen(port, () => {
        console.log("server is running on port" + port);
    });
})
    .catch((error) => console.log(error));
