const express = require("express");
const app = express();
const authRouter = require("./routes/authRouter");
const connectDB = require("./DB/connect");
const { notFoundErrorHandler, globalErrorHandler } = require("./middlewares/errorHandler");

app.use("/api/v1/auth", authRouter);

app.use("*", notFoundErrorHandler); // api route not found error handling
app.use(globalErrorHandler); //global error handler
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
