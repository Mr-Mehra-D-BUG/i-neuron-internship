const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "user name must required"],
  },
  password: {
    type: String,
    required: [true, "password must required"],
  },
  // not working
  ConfirmPassword: {
    type: String,
    require: [true,  "Confirm Password is missing"],
    // custom validator
    validate: {
      validator: function () {
        if (this.password ==this.ConfirmPassword) {
          // this is the json file enterd by user
          return true;
        } else {
          // if pass && cnfPass not matched
          return false;
        }
      },
      message: "password is missmatch",
    },
  },

  email: {
    type: String,
    required: [true, "Email is not entered"],
    unique: [true, "user with this email alredy registerd"],
  },
  phoneNumber: {
    type: String,
    minLength: 10,
    max: 10,
  },
  pic: {
    type: String, // url // route will added here
    default: "../img/luffy.png",
  },
});

const userModel = mongoose.model('userModel' , userSchema);
module.exports = userModel;