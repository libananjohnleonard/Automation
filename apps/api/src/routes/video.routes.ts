import { Router } from "express";

import {
  createVideo
} from "../controllers/video.controller.js";


import {
  authMiddleware
} from "../middleware/auth.middleware.js";


const router = Router();


router.post(
  "/:id",
  authMiddleware,
  createVideo
);


export default router;