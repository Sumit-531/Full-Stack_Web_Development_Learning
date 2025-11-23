import express from "express";
import { PORT } from "./config/env.js";
import connectToDatabase from "./database/mongodb.js";
import authRouter from "./routes/auth.routes.js";
import userRouter from "./routes/user.routes.js";

const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// route
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/users", userRouter);

app.listen(PORT, async () => {
  console.log(`Server is running on http://localhost:${PORT}`);

  await connectToDatabase();
});
