const express = require('express');
const connection = require("./config/db");
const app = express();
const userRoute = require('./routes/user/user.js');
const todoRoute = require('./routes/todos/todos.js');
const port = 3001; // this should be in the . env file /!

app.use(express.urlencoded({extended:true}));
app.use(express.json());
// app.use('/user/', userRoute);
app.use(userRoute);
app.use(todoRoute);
app.listen(port);

module.exports = app;