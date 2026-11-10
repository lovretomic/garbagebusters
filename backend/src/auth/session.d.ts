import 'express-session';

declare module 'express-session' {
  interface SessionData {
    oauth?: {
      state: string;
      nonce: string;
      codeVerifier: string;
    };

    user?: {
      id: number;
      email: string;
      name?: string;
    };
  }
}
