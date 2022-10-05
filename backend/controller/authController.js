const User = require("../models/user");

async function signUpController(req, res, next) {
  try {
    // get signup payload from request body
    const { email, password, name } = req.body;

    // check if someone already enrolled with same email

    const user = await User.findOne({ email });

    if (user) {
      return next({ status: 400, message: "User already exists" });
    }

    // create new user
    const newUser = new User({ email, password, name });

    const saveUser = await newUser.save();

    return res.status(201).json({
      type: "success",
      message: "Account created successfully",
      data: { userId: saveUser.id },
    });
  } catch (error) {
    next(error);
  }
}

async function loginController(req, res) {
  console.log("this login");
}
async function forgotPasswordController(req, res) {
  console.log("This is from fp");
}
async function restPasswordController(req, res) {
  console.log("restpass");
}

module.exports = {
  signUpController,
  loginController,
  forgotPasswordController,
  restPasswordController,
};
