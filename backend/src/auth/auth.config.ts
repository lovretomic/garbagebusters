import "dotenv/config";
import { Issuer } from "openid-client";

export async function createGoogleClient() {
    const clientId = process.env.GOOGLE_CLIENT_ID;
    const clientSecret = process.env.GOOGLE_CLIENT_SECRET;
    const callbackUrl = process.env.GOOGLE_CALLBACK_URL;

    if (!clientId || !clientSecret || !callbackUrl) {
        throw new Error("Missing Google OAuth configuration");
    }

    const googleIssuer = await Issuer.discover(
        "https://accounts.google.com"
    );

    return new googleIssuer.Client({
        client_id: clientId,
        client_secret: clientSecret,
        redirect_uris: [callbackUrl],
        response_types: ["code"]
    });
}