const express = require("express");
const { body } = require("express-validator");
const authRouter = express.Router();

const {
  signUpController,
  loginController,
  forgotPasswordController,
  restPasswordController,
} = require("../controller/authController");

const signupValidation = [
  body("name").not().isEmpty().withMessage("Name must be required"),
  body("email")
    .not()
    .isEmpty()
    .withMessage("Email address must be required")
    .isEmail()
    .withMessage("Incorrect email address"),
  body("password").not().isEmpty().withMessage("Password must be required"),
];

authRouter.post("/signup", signupValidation, signUpController);
authRouter.post("/login", loginController);
authRouter.patch("/forgotPassword", forgotPasswordController);
authRouter.patch("/restPassword", restPasswordController);

module.exports = authRouter;
