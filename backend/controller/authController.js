const userModel = require("../model/userModel");

async function signUpController(req,res){
 try{
 const newUser = await userModel.create(req.body);
 res.status(200).json({
    user : newUser,
    msg : "new user added"
 })
}catch(err){
     res.status(500).json({
        error : err,
        msg : "oops"
     });
}
}

async function loginController(req , res){
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