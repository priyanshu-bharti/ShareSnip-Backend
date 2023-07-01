import { auth } from "express-openid-connect";
import defaultServerConfig from "../config/loadConfig.js";

const config = {
    authRequired: false,
    auth0Logout: true,
    baseURL: defaultServerConfig.devURL,
    clientID: defaultServerConfig.clientID,
    issuerBaseURL: defaultServerConfig.issuerBaseURL,
    secret: defaultServerConfig.clientSecret,
};

const authRouter = auth(config);
export default authRouter;
