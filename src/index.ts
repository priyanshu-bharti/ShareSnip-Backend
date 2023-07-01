import express, { Request, Response } from "express";
import pasteRouter from "./routes/pasteRoute.js";
import defaultServerConfig from "./config/loadConfig.js";
import jwtCheck from "./middleware/checkJwt.js";

// Load the environment variables
const port = defaultServerConfig.port;

// Configure Express Server
const app = express();
app.use(express.json());

// Default Route
app.get("/", (req: Request, res: Response) => {
    res.json({ test: "Ok" });
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
