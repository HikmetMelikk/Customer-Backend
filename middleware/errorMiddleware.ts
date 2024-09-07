import { Request, Response, NextFunction } from "express";

interface Error {
  message: string;
  stack?: string;
}

const errorMiddleware = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  console.log(`Error: ${err.message}`);
  const statusCode = res.statusCode ? res.statusCode : 500;
  res.status(statusCode);
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === "development" ? err.stack : null,
  });
};

export default errorMiddleware;
