import authorize from "../middlewares/auth.middleware.js";
import { Router } from "express";
import authorizeRole from "../middlewares/role.middleware.js";

const userRouter = Router();

// Only the admin has access
userRouter.get("/admin", authorize, authorizeRole("admin"), (req, res) => {
  res.json({ message: "Welcome Admin" });
});
// Both the admin and the manager has access
userRouter.get(
  "/manager",
  authorize,
  authorizeRole("admin", "manager"),
  (req, res) => {
    res.json({ message: "Welcome Manager" });
  }
);

// All have access
userRouter.get(
  "/user",
  authorize,
  authorizeRole("admin", "manager", "user"),
  (req, res) => {
    res.json({ message: "Welcome User" });
  }
);

export default userRouter;
