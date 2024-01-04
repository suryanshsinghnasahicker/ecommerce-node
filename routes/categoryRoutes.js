import express from "express";
const router = express.Router();
import { requireSignIn, isAdmin } from "../middlewares/authMiddleware.js";
import { createCategoryController } from "../controllers/categoryController.js";
//routes
router.post(
  "create-category",
  requireSignIn,
  isAdmin,
  createCategoryController
);

export default router;
