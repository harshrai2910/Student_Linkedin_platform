const express = require("express");
const userPostRouter = express.Router();
const userPostController = require("../controller/userPostController");
const isAuth = require("../middleware/isAuth");
const upload = require("../middleware/multer");

userPostRouter.post(
  "/profile/create-post",
  isAuth,
  (req, res, next) => {
    req.uploadType = "post";
    next();
  },
  upload.single("postImage"),
  userPostController.createPost,
);

userPostRouter.get("/profile/all-post", userPostController.getPosts);

userPostRouter.delete(
  "/profile/post/delete",
  isAuth,
  userPostController.deletePost,
);

userPostRouter.get("/getallPost", userPostController.getAllPosts);
userPostRouter.put("/post/:postId", userPostController.putLikePost);
userPostRouter.put(
  "/follwers/:userId",
  isAuth,
  userPostController.putFollowers,
);

module.exports = userPostRouter;
