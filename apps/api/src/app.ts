import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

import healthRoutes from "./routes/health.routes.js";
import userRoutes from "./routes/user.routes.js";
import projectRoutes from "./routes/project.routes.js";
import sceneRoutes from "./routes/scene.routes.js";
import assetRoutes from "./routes/asset.routes.js";
import generatedVideoRoutes from "./routes/generatedVideo.routes.js";
import { errorHandler } from "./middleware/error.middleware.js";
import authRoutes from "./routes/auth.routes.js";


const app = express();


app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());


// Routes
app.use("/health", healthRoutes);

app.use("/auth", authRoutes);

app.use("/users", userRoutes);
app.use("/projects", projectRoutes);
app.use("/scenes", sceneRoutes);
app.use("/assets", assetRoutes);
app.use("/videos", generatedVideoRoutes);



// Error handler should be LAST
app.use(errorHandler);


export default app;