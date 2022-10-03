const express  = require('express');
const app = express();
const connectDB = require('./model/userModel');
const router = require('./route/userRoute');
app.use('/' , router);
connectDB();
app.listen(3000 , console.log("server started at 3000"));
