import express, { Express, Request, Response } from "express";
import cors from "cors";


// Initialized Server
const app: Express = express();
const port = process.env.PORT || 4000;

app.use(express.json());
app.use(cors()); 

app.get("/", (req: Request, res: Response) => {
  res.json({ message: "Hello API" });
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
})