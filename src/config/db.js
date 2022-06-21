// get the client
const mysql = require('mysql2')
// const express = require('express')
// const app = express()

// create the connection to database

var connection = mysql.createConnection({
    port: 3306,
    host: 'localhost',
    user: 'valeria',
    password: 'password',
    database: 'epytodo'
});

connection.connect((err)=> {
    if(!err) {
        console.log("Connected");
   }
    else
    console.log(err);
});

module.exports = connection;