const express = require("express");
const authRouter = express.Router();

const {
  signUpController,
  loginController,
  forgotPasswordController,
  restPasswordController,
} = require("../controller/authController");

authRouter.post("/signup", signUpController);
authRouter.post("/login", loginController);
authRouter.patch("/forgotPassword", forgotPasswordController);
authRouter.patch("/restPassword", restPasswordController);

module.exports = authRouter;
