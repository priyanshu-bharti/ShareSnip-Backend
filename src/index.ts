import express, { Request, Response } from "express";
import pasteRouter from "./routes/pasteRoute.js";
import defaultServerConfig from "./config/loadConfig.js";
import jwtCheck from "./middleware/checkJwt.js";
import authRouter from "./routes/auth.js";

// Load the environment variables
const port = defaultServerConfig.port;

// Configure Express Server
const app = express();
app.use(express.json());

// Auth Routes (/login, /logout, /callback)
app.use(authRouter);

// req.isAuthenticated is provided from the auth router
app.get("/", (req, res) => {
    res.send(req.oidc.isAuthenticated() ? "Logged in" : "Logged out");
});

// Check Health Route
app.get("/health", (req: Request, res: Response) => {
    res.json({ health: "Good" });
});

// Protect our routes
app.use(jwtCheck);

// Paste Router
app.use("/paste", pasteRouter);

// Server Initialization
app.listen(port, () => {
    console.log("server has started on port");
    console.log("http://localhost:" + port);
});

export default app;
