import "express-session";

declare module "express-session" {
    interface SessionData {
        oauth?: {
            state: string;
            nonce: string;
            codeVerifier: string;
        };

        user?: {
            id: string;
            email: string;
            name?: string;
        };
    }
}