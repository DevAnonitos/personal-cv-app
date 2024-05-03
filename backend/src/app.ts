import express, { Express, Request, Response } from "express";
import cors from "cors";
import logger from "./loggers/winston.log";

// Initialized configuration
const app: Express = express();

// use configuration
app.use(express.json());
app.use(cors()); 

// Handle Logic
app.get("/", (req: Request, res: Response) => {
  logger.debug("Endpoint accessed: GET /");
  res.json({ message: "Hello API" });
});

export default app;