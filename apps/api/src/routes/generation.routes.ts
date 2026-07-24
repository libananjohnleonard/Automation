import { Router } from "express";

import {
 generateProjectAd
} from "../controllers/generation.controller.js";

import {
 authMiddleware
} from "../middleware/auth.middleware.js";


const router = Router();


router.post(
 "/:id/generate",
 authMiddleware,
 generateProjectAd
);


export default router;