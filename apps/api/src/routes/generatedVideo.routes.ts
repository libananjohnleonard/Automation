import { Router } from "express";

import {
  createGeneratedVideo,
  getGeneratedVideosByProject
} from "../controllers/generatedVideo.controller.js";


const router = Router();



router.post(
  "/",
  createGeneratedVideo
);



router.get(
  "/project/:projectId",
  getGeneratedVideosByProject
);



export default router;