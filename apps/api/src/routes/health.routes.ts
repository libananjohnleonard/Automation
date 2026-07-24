import { Router } from "express";

const router = Router();

router.get("/", (_, res) => {
  res.json({
    status: "API running"
  });
});

export default router;