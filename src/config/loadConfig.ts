import { fileURLToPath } from "url";
import dotenv from "dotenv";
import path, { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, "../../.env") });

interface ServerConfig {
    port: string | number;
    audience: string;
    devURL: string;
    issuerBaseURL: string;
    clientID: string;
    clientSecret: string;
}

const defaultServerConfig: ServerConfig = {
    port: process.env.PORT_NUMBER || 5002,
    audience: process.env.AUTH0_AUDIENCE_URL || "",
    devURL: process.env.AUTH0_DEV_URL || "",
    issuerBaseURL: process.env.AUTH0_ISSUER_BASE_URL || "",
    clientID: process.env.AUTH0_CLIENT_ID || "",
    clientSecret: process.env.AUTH0_CLIENT_SECRET || "",
};

export default defaultServerConfig;
