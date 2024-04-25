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

export const findPostById = async (req, res) => {
  try {
    const { postId } = req.params;

    const post = await Post.findById(postId);

    if (!post) {
      return res.status(404).json({ error: "Post not found" });
    }
    res.status(200).json(post);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server Error" });
  }
};

export const deletePostById = async (req, res) => {
  try {
    const { postId } = req.params;
    await Post.findByIdAndDelete({ _id: postId });
    res.status(200).json({ message: "Post deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to delete the post" });
  }
};

export const updatePostById = async (req, res) => {
  try {
    const { postId } = req.params;
    const { title, description } = req.body;
    let post = await Post.findById({ _id: postId });
    if (!post) {
      return res.status(404).json({ error: "Post not found" });
    }

    title &&
      (post = await Post.findByIdAndUpdate(postId, { title }, { new: true }));
    description &&
      (post = await Post.findByIdAndUpdate(
        postId,
        { description },
        { new: true }
      ));
    res.status(200).json({ message: "Post updated successfully", post });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to update the post" });
  }
};
