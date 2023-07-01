import { auth } from "express-oauth2-jwt-bearer";
import defaultServerConfig from "../config/loadConfig.js";

const audience = defaultServerConfig.audience;
const issuerBaseURL = defaultServerConfig.issuerBaseURL;

// Configure our auth0 Middleware
const jwtCheck = auth({
    audience: audience,
    issuerBaseURL: issuerBaseURL,
    tokenSigningAlg: "RS256",
});

export default jwtCheck;
