import winston from "winston";
import path from "path";

const { combine, timestamp, json } = winston.format;
// Config Path Log
const logsDir = path.join(__dirname, '..', 'logs');

const logger = winston.createLogger({
  level: process.env.LOG_LEVEL || 'debug',
  format: combine(timestamp(), json()),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({
      dirname: logsDir, filename: 'test.log',
    }),
  ],
});

export default logger;