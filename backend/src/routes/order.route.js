import { Router } from "express";
import { protectRoute } from "../middleware/auth.middleware";
import { createOrder, getUserOrders } from "../controllers/order.controller";

const router = Router();

router.post("/", protectRoute, createOrder);
router.get("/", protectRoute, getUserOrders);

export default router;
