

async function signUpController(req, res){
try{
    console.log("this is signUpController");
}catch(err){
  console.log("this is error from signUpController");
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