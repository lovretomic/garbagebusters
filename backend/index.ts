import "dotenv/config";
import path from "node:path";
import express from "express";
import volunteerRoutes from "./src/volunteers/volunteers.routes";
import actionsRoutes from "./src/actions/actions.routes";
import authRoutes from "./src/auth/auth.routes";
import session from "express-session";
import reportsRoutes from "./src/reports/reports.routes";
import associationRoutes from "./src/associations/associations.routes";
import usersRoutes from "./src/users/users.routes";
import cors from "cors";

import connectPgSimple from "connect-pg-simple";
import pg from "pg";

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);

app.use(express.json());

const sessionSecret = process.env.SESSION_SECRET;

if (!sessionSecret) {
  throw new Error("SESSION_SECRET is not configured");
}

const databaseUrl = process.env.DATABASE_URL;

if (!databaseUrl) {
  throw new Error("DATABASE_URL is not configured");
}

const PgSession = connectPgSimple(session);

const sessionPool = new pg.Pool({
  connectionString: databaseUrl,
});

const sessionStore = new PgSession({
  pool: sessionPool,
  tableName: "session",
  createTableIfMissing: true,
});

app.set("trust proxy", 1);

app.use(
  session({
    store: sessionStore,
    secret: sessionSecret,
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 24 * 60 * 60 * 1000,
    },
  }),
);

app.use(express.json());

app.use("/actions", actionsRoutes);
app.use("/auth", authRoutes);
app.use("/volunteers", volunteerRoutes);
app.use("/reports", reportsRoutes);
app.use("/associations", associationRoutes);
app.use("/users", usersRoutes);

const PORT = Number(process.env.PORT || 3001);

if (process.env.NODE_ENV === "production") {
  const frontendDir = path.resolve(__dirname, "../../frontend/dist");

  app.use(express.static(frontendDir));

  app.use((req, res, next) => {
    const isApiRoute = /^\/(auth|actions|volunteers|reports|associations)(\/|$)/.test(req.path);

    if (req.method !== "GET" || isApiRoute) {
      return next();
    }

    res.sendFile(path.join(frontendDir, "index.html"));
  });
}

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
