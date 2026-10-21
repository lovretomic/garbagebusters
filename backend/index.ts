import express from 'express';
import actionsRoutes from "./src/actions/actions.routes"

const app = express();

app.get("/", (req, res) => 
res.json("Server works!")
)

app.use("/actions", actionsRoutes)

app.listen(3001);
