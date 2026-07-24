import { Router } from "express";

import {
  createScene,
  getScenesByProject
} from "../controllers/scene.controller.js";


const router = Router();


// CREATE SCENE
// POST /scenes
router.post(
  "/",
  createScene
);


// GET PROJECT SCENES
// GET /scenes/project/:projectId
router.get(
  "/project/:projectId",
  getScenesByProject
);


export default router;