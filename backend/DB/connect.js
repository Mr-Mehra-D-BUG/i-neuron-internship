const mongoose = require("mongoose");
const { DB_LINK } = require("../seceret");

const connectDB = () => {
  mongoose.connect(DB_LINK);
  console.log("DB connected");
};

module.exports = connectDB;
