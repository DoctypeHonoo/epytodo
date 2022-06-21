// const express = require('express')
const connection = require('../../config/db.js');
var router = require("express").Router();

//


// router.post('/auth', function(req, res) {
//     // Capture the input fields
//     var username = req.body.username;
//     var password = req.body.password;
//     // Ensure the input fields exists and are not empty
//     if (username && password) {
//         // Execute SQL query that'll select the account from the database based on the specified username and password
//         console.log(username, password);
//         connection.query('SELECT * FROM accounts WHERE username = ? AND password = ?', [username, password], function(error, results, fields) {
//             // If there is an issue with the query, output the error
//             if (error) throw error;
//             // If the account exists
//             if (results.length > 0) {
//                 // Authenticate the user
//                 req.session.loggedin = true;
//                 req.session.username = username;
//                 // Redirect to home page
//                 res.redirect('/create');
//             } else {
//                 res.send('Incorrect Username and/or Password!');
//             }
//             res.end();
//         });
//     } else {
//         res.send('Enter Username and Password :)');
//         res.end();
//     }
// });


//

router.post('/register/', (req, res, next) => {
    var users = req.body;

    query = "insert into user(name,first_name,email,password)values(?,?,?,?)";
    connection.query(query,[users.name, users.first_name, users.email, users.password],(err,results)=> {
        const mail = "SELECT from `user` WHERE email = " + [users.email];
        if(!err) {
            console.log(mail);
            console.log(users.email);
            if (mail == 0) {
                console.log(results);
                return res.status(201).json({token: "Token of the newly registered user"});
            }
            else {
                console.log(results);
                return res.status(200).json({msg: "Account already exists"});
            }
        }
        if (err) {
            console.log("error");
            return res.status(500).json(err);
        }
    });
});

router.get('/read/users',(req,res,next) => {
    var query= "SELECT * from user";
    connection.query(query,(err,results) => {
        if(!err){
            return res.status(200).json(results);
        }
        else{
            return res.status(500).json(err);
        }
    });
});

router.get('/users/:id', (req, res) => {
    console.log(req.params.id);
    query = "SELECT * FROM `user` WHERE email = " + [req.params.id] + " OR id = " + [req.params.id];

    connection.query(query, (err,results)=> {
        if(!err) {
            console.log(results);
            return res.status(200).json(results);
        }
        else {
            console.log("PROUT2");
            return res.status(500).json(err);
        }
    });
});

router.put('/update/:id',(req,res,next) => {
    const id = req.params.id;
    var users = req.body;
    // var query = "update into users (name,first_name,email,password)values(?,?,?,?)";

    var query = "update user set email=?, password=?, first_name=?, name=? where id=?";
    connection.query(query,[users.name,users.first_name,users.email, users.password, id], (err,results) => {
        if(!err){
            if (results.affectedRows == 0){
                return res.status(404).json({msg:"User id does not found"});
           }
            return res.status(200).json({msg:"User Updated Successfully"});
        } else {
            return res.status(500).json(err);
        }
    });
});

router.delete('/users/:id',(req,res) => {
    var query = "DELETE FROM `user` WHERE id = " + [req.params.id];
    connection.query(query,(err,results) => {
        if(!err) {
            return res.status(200).json({msg: "Successfully deleted record number : $ " + req.params.id });
        }
        else {
            console.log("error");
            return res.status(500).json(err);
        }
        });
    });

module.exports = router;
