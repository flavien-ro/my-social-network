import express from "express";
import { getFeedPosts, getUsersPosts, likePost } from "../controllers/posts.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

// read
router.get("/", verifyToken, getFeedPosts);
router.get("/:userId/posts", verifyToken, getUsersPosts);

// update
router.patch("/:id/like", verifyToken, likePost);

export default router;
