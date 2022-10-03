const mongoose = require("mongoose");
const { DB_LINK } = require("../seceret");

// DB call from app.js
const connectDB = () => {
  mongoose.connect(DB_LINK);
  console.log("connected to DB...");
};
module.exports = connectDB;
