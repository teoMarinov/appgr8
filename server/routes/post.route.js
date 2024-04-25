import express from "express";
import {
  newPost,
  allPosts,
  findPostById,
} from "../controllers/post.controller.js";

const router = express.Router();

router.get("/all", allPosts);

router.post("/upload", newPost);

router.get("/:postId", findPostById);

export default router;
