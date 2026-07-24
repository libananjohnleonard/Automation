import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

import healthRoutes from "./routes/health.routes.js";
import userRoutes from "./routes/user.routes.js";


const app = express();


app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());


app.use("/health", healthRoutes);
app.use("/users", userRoutes);

export default app;