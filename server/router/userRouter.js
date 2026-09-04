const express = require("express");
const userRouter = express.Router();
const userController = require("../controller/userController");
const isAuth = require("../middleware/isAuth");
const upload = require("../middleware/multer");

userRouter.get("/profile", userController.getUserData);

userRouter.post(
  "/profile/complete",
  isAuth,
  (req, res, next) => {
    req.uploadType = "profile";
    next();
  },
  upload.single("profile"),
  userController.postCompleteData,
);

userRouter.put("/profile/language", userController.postEditLanguage);
userRouter.put(
  "/profile/skills/delete",
  isAuth,
  userController.putDeleteSkills,
);

userRouter.put("/profile/skills/update", userController.putUpdateSkill);

module.exports = userRouter;
