import Post from "../db/Post.js";
import "../db/config.js";

export const newPost = async (req, res) => {
  try {
    const { title, description, image } = req.body;

    if (!title || !description || !image) {
      return res
        .status(400)
        .json({ error: "Title, Description and Image are required" });
    }

    const post = new Post({ title, description, image });

    await post.save();

    res.status(201).json(post);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server Error" });
  }
};

export const allPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    res.status(200).json(posts);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server Error" });
  }
};
