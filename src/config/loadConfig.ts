import { fileURLToPath } from "url";
import dotenv from "dotenv";
import path, { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, "../../.env") });

interface ServerConfig {
    port: string | number;
    audience: string;
    issuerBaseURL: string;
}

const defaultServerConfig: ServerConfig = {
    port: process.env.PORT_NUMBER || 5002,
    audience: process.env.AUTH0_AUDIENCE_URL || "",
    issuerBaseURL: process.env.AUTH0_ISSUER_BASE_URL || "",
};

export default defaultServerConfig;
