import express, { Express, Request, Response } from "express";
import cors from "cors";
import axios from "axios";
import * as cheerio from 'cheerio';
import cron from "node-cron";

// Initialized configuration
const app: Express = express();

// use configuration
app.use(express.json());
app.use(cors()); 

// Crawler configuration
let crawledData: string = "";

const crawlData = async () => {
  try {
    const res = await axios.get("https://ou.edu.vn/thong-bao-cho-sinh-vien/");
    const $ = cheerio.load(res.data);
    crawledData = $(".wpb_wrapper").text();
    console.log("Data crawled successfully:", crawledData);
  } catch (error: any) {
    console.error("Error occurred while crawling data:", error);
  }
};

cron.schedule("* * * * *", crawlData);

app.get("/api/v1/data", (req: Request, res: Response) => {
  res.json({ data: crawledData });
});

// Handle Logic
app.get("/", (req: Request, res: Response) => {
  res.json({ message: "Hello API" });
});

export default app;