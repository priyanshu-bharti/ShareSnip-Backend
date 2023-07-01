import express, { Request, Response } from "express";
import dotenv from "dotenv";
import pasteRouter from "./routes/pasteRoute.js";

dotenv.config();

const app = express();
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
    res.json({ test: "Ok" });
});

app.use("/paste", pasteRouter);

const PORT = process.env.PORT_NUMBER || 5002;
app.listen(PORT, () => {
    console.log("server has started on port");
    console.log("http://localhost:" + PORT);
});

export default app;
