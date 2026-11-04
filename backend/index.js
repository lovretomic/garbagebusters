"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const actions_routes_1 = __importDefault(require("./src/actions/actions.routes"));
const app = (0, express_1.default)();
app.get("/", (req, res) => res.json("Server works!"));
app.use("/actions", actions_routes_1.default);
app.listen(3001);
