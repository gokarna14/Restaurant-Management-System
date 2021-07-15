const express = require('express')
const mysql = require('mysql')

// Create connection

const db = mysql.createConnection({
    host : 'localhost',
    user: 'root',
    password: "",
    database: 'classicmodels',
})

db.connect((err)=>{
    if(err){
        console.error("Error on db connect");
    }
    console.log('MySQL connected'); 
})
  
 
const app = express();

app.get('/api/customers/', (req, res)=>{
    let r = '';
    db.query("SELECT * FROM orderdetails", (err, rows, fields)=>{
        if(err){
            console.log('Error in the query');
        }else{
            console.log("Query successfull");
            res.send(rows);
            console.log("Done")
        }
    }) 
}) 
 

/*
app.get('/createdb', (req, res)=>{
    let sql = 'CREATE DATABASE nodeMysql'
    db.query(sql, (err, res) =>{ 
        if(err){ 
            console.error("Error on query");
        } 
        else{
            console.log(res);
            res.send('Database Created');  
        }
    })
})*/

app.listen('4000', ()=>{ 
    console.log('Server started on port 4000');
}); 