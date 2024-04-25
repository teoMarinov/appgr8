import Post from "../db/Post.js";
import "../db/config.js";

export const newPost = async (req, res) => {
  try {
    const { title, description, image } = req.body;

    const post = new Post({ title, description, image });

    await post.save();

    res.status(201).json(post);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "failed" });
  }
};
