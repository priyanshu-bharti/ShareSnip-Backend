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

// Redirection Route req.isAuthenticated is provided from the auth router
app.get("/", (req, res) => {
    res.redirect(
        req.oidc.isAuthenticated() ? "http://localhost:5173/" : "/checkLogin"
    );
});

// Display login status route
app.get("/checkLogin", (req, res) => {
    res.send(req.oidc.isAuthenticated() ? "Logged In" : "Logged Out");
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
