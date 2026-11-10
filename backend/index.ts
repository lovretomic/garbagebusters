import express from 'express';
import actionsRoutes from './src/actions/actions.routes';
import authRoutes from './src/auth/auth.routes';
import session from 'express-session';

import 'dotenv/config';
import connectPgSimple from 'connect-pg-simple';
import pg from 'pg';

const app = express();

const sessionSecret = process.env.SESSION_SECRET;

if (!sessionSecret) {
  throw new Error('SESSION_SECRET is not configured');
}

const databaseUrl = process.env.DATABASE_URL;

if (!databaseUrl) {
  throw new Error('DATABASE_URL is not configured');
}

const PgSession = connectPgSimple(session);

const sessionPool = new pg.Pool({
  connectionString: databaseUrl,
});

const sessionStore = new PgSession({
  pool: sessionPool,
  tableName: 'session',
  createTableIfMissing: true,
});

app.set('trust proxy', 1);

app.use(
  session({
    store: sessionStore,
    secret: sessionSecret,
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 24 * 60 * 60 * 1000,
    },
  }),
);

app.get('/', (_req, res) => {
  res.json('Server works!');
});

app.use('/actions', actionsRoutes);
app.use('/auth', authRoutes);

const PORT = Number(process.env.PORT || 3001);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
