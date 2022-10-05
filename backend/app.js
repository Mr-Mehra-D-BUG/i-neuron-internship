const express = require("express");
const app = express();
const authRouter = require("./routes/authRouter");
const connectDB = require("./DB/connect");
const { notFoundErrorHandler } = require("./middlewares/errorHandler");

app.use("api/v1/auth", authRouter);

app.use("*", notFoundErrorHandler); // api route not found error handling

// server and DB
const port = 3000;
const start = () => {
  try {
    connectDB();
    app.listen(port, console.log(`Server listening at port ${port}`));
  } catch (error) {
    console.log(error);
  }
};
start();
