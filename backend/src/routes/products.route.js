import { Router } from "express";
import { protectRoute } from "../middleware/auth.middleware.js";
import {
  getAllProducts,
  getProductById,
} from "../controllers/admin.controller.js";

const router = Router();

router.get("/", protectRoute, getAllProducts);
router.get("/:id", protectRoute, getProductById);

export default router;
