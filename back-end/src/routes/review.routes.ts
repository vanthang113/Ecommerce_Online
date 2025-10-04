import { Router } from "express";
import { createReview, listReviewsAdmin, deleteReviewAdmin } from "../controllers/review.controller";
import { authMiddleware } from "../middlewares/auth.middleware";
import { requireAdmin } from "../middlewares/role.middleware";

const router = Router();
router.post("/", authMiddleware, createReview);
router.get("/", authMiddleware, requireAdmin, listReviewsAdmin);
router.delete("/:id", authMiddleware, requireAdmin, deleteReviewAdmin);

export default router;
