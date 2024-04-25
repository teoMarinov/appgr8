import express from "express";
import { newPost } from "../controllers/post.controller.js";

const router = express.Router();

router.post("/test", newPost);

export default router;
