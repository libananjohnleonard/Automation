import { Router } from "express";

import {
  createScene,
  getScenesByProject
} from "../controllers/scene.controller.js";


const router = Router();


// POST CREATE SCENE
router.post(
  "/",
  createScene
);


// GET PROJECT SCENES
router.get(
  "/project/:projectId",
  getScenesByProject
);


export default router;