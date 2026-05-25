const express = require("express");
const authRouter = express.Router();
const authController = require("../controller/authController");

authRouter.post("/signup", authController.postSignup);
authRouter.post("/login", authController.postLogin);
authRouter.post("/postLogout", authController.postLogout);

authRouter.get("/status", authController.getAuthStatus);

module.exports = authRouter;
