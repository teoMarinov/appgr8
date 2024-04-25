import express from "express";
import {
  newPost,
  allPosts,
  findPostById,
  deletePostById,
  updatePostById,
} from "../controllers/post.controller.js";

const router = express.Router();

router.get("/all", allPosts);

router.post("/upload", newPost);

router.get("/:postId", findPostById);

router.delete("/:postId", deletePostById);

router.put("/:postId", updatePostById);

export default router;
