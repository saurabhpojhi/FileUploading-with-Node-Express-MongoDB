const express = require('express');

const connect = require('./config/db');
const app = express();
const userController = require('./controller/user.controller');


app.use("/users", userController);
app.listen(2345, async()=>{     
    await connect();
    console.log("Server is running");
});
