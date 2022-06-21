// const express = require('express')
const connection = require('../../config/db.js');
var router = require("express").Router();

router.post('/todos/', (req, res, next) => {
    var todos = req.body;

    query = "insert into todo(title,description,status)values(?,?,?)";
    connection.query(query,[todos.title, todos.description, todos.status],(err,results)=> {
        if(!err) {
            if (results.length === 0) {
                console.log(results);
                return res.status(201).json({token: "Token of the newly registered user"});
            }
            else {
                console.log(results);
                return res.status(200).json({msg: "Todo already exists"});
            }
        }
        if (err) {
            console.log("error");
            return res.status(500).json(err);
        }
    });
});

router.get('/read/todos',(req,res,next) => {
    var query= "SELECT * from todo";
    connection.query(query,(err,results)=>{
        if(!err){
            return res.status(200).json(results);
        }
        else{
            return res.status(500).json(err);
        }
    });
});

router.get('/todos/:id', (req, res) => {
    console.log(req.params.id);
    query = "SELECT * FROM `todo` WHERE id = " + [req.params.id];

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

router.delete('/todos/:id',(req,res) => {
    var query = "DELETE FROM `todo` WHERE id = " + [req.params.id];
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


// {
    // "title": "bttf sokoban",
    // "description": "finir le sokoban pour passer l'année ^^",
    // "status": "started"
// }