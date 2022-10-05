const express = require('express');
const app = express();
const authRouter = require('./routes/authRouter');
const connectDB = require("./DB/connect");

app.use('api/v1/auth' , authRouter);

// server and DB
const port = 3000;
const start = ()=>{
    try{
       connectDB();
       app.listen(port, console.log(`Server listening at port ${port}`));
    }catch(error){
        console.log(error);
    }
}
start();