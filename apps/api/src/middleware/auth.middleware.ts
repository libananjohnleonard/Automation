import type { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

import { JWT_SECRET } from "../config/jwt.js";


export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {

  try {

    const authHeader = req.headers.authorization;


    if (!authHeader) {

      return res.status(401).json({
        message: "Authorization header missing"
      });

    }


    const parts = authHeader.split(" ");


    if (
      parts.length !== 2 ||
      parts[0] !== "Bearer"
    ) {

      return res.status(401).json({
        message: "Invalid authorization format"
      });

    }


    const token = parts[1];


    if (!token) {

      return res.status(401).json({
        message: "Token missing"
      });

    }


    const decoded = jwt.verify(
      token,
      JWT_SECRET
    ) as unknown as {
      userId: string;
    };


    if (!decoded.userId) {

      return res.status(401).json({
        message: "Invalid token payload"
      });

    }


    req.user = {
      id: decoded.userId
    };


    console.log("Authenticated User:", req.user);


    next();


  } catch (error) {

    console.log("JWT Error:", error);


    return res.status(401).json({
      message: "Invalid token"
    });

  }

};