import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

import healthRoutes from "./routes/health.routes.js";
import userRoutes from "./routes/user.routes.js";
import projectRoutes from "./routes/project.routes.js";
import sceneRoutes from "./routes/scene.routes.js";


const app = express();


app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());


app.use("/health", healthRoutes);
app.use("/projects", projectRoutes);
app.use("/users", userRoutes);
app.use("/scenes", sceneRoutes);


export default app;