import express from 'express';
import actionsRoutes from "./src/actions/actions.routes";
import volunteerRoutes from "./src/volunteers/volunteers.routes";

const app = express();

app.get("/", (req, res) => 
res.json("Server works!")
)

app.use("/actions", actionsRoutes)
app.use("/volunteers", volunteerRoutes)

app.listen(3001);
