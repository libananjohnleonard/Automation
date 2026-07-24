import { Router } from "express";

import {
    createScene,
    getScenes
} from "../controllers/scene.controller.js";


const router = Router();



router.post("/", createScene);


router.get("/:projectId", getScenes);



export default router;