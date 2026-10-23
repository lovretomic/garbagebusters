import express from "express";
import actionsRoutes from "./src/actions/actions.routes";
import authRoutes from "./src/auth/auth.routes";

const app = express();

app.get("/", (req, res) => {
    res.json("Server works!");
});

app.use("/actions", actionsRoutes);
app.use("/auth", authRoutes);

app.listen(3001);