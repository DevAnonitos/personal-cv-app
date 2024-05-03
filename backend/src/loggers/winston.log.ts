import winston from "winston";

const { combine, timestamp, json } = winston.format;

const logger = winston.createLogger({
  level: process.env.LOG_LEVEL || 'debug',
  format: combine(timestamp(), json()),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({
      dirname: 'logs', filename: 'test.log',
    }),
  ],
});

export default logger;