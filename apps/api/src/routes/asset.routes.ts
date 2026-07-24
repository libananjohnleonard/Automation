import { Router } from "express";

import {
  createAsset,
  getAssetsByProject
} from "../controllers/asset.controller.js";


const router = Router();



router.post(
  "/",
  createAsset
);



router.get(
  "/project/:projectId",
  getAssetsByProject
);



export default router;