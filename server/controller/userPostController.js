const { check, validationResult } = require("express-validator");
const UserPost = require("../model/userPost");
const User = require("../model/user");
const path = require("path");
const fs = require("fs");

exports.createPost = async (req, res, next) => {
  const id = req.session.user.userId;
  const { content } = req.body;
  const filename = req.file.filename;

  const userPost = new UserPost({
    UserId: id,
    content,
    postImage: filename,
  });

  await userPost.save();

  return await res.status(200).json({ post: userPost });
};

exports.getPosts = async (req, res, next) => {
  const id = req.session.user.userId;
  const posts = await UserPost.find({ UserId: id });

  return res.status(200).json({ post: posts });
};

exports.deletePost = async (req, res, next) => {
  try {
    const { delId } = req.body;
    const post = await UserPost.findOne({ _id: delId });
    const { postImage } = post;

    if (!postImage) {
      return res.json("post image does not exist");
    }

    const rootdir = require("../utils/pathUtils");
    const imagePath = path.join(rootdir, "uploads/post", postImage);

    fs.unlinkSync(imagePath);
    await UserPost.findByIdAndDelete(delId);

    return res.json("post deleted successfully");
  } catch (err) {
    console.log(err);
    return res.status(500).json("Something went wrong");
  }
};

exports.getAllPosts = async (req, res, next) => {
  const usersPost = await UserPost.find().populate("UserId");
  res.json({ usersPost });
};

exports.putLikePost = async (req, res, next) => {
  const userId = req.session.user.userId;
  const postId = req.params.postId;

  const post = await UserPost.findById(postId).populate("UserId");

  if (!post.likes.includes(userId)) {
    post.likes.push(userId);
  } else {
    post.likes.pull(userId);
  }

  await post.save();

  return res.json(post);
};

exports.putFollowers = async (req, res, next) => {
  const { userId } = req.params;
  const id = req.session.user.userId;

  const user = await User.findById(id);

  if (!user.following.includes(userId)) {
    user.following.push(userId);
  } else {
    user.following.pull(userId);
  }

  await user.save();

  return res.json("followed");
};
