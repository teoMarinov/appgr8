import express from "express";
import { newPost, allPosts } from "../controllers/post.controller.js";

const router = express.Router();

router.get("/all", allPosts)

router.post("/upload", newPost);

export default router;
