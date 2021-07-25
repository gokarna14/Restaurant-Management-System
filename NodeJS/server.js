const express = require('express')
const mysql = require('mysql')
const app = express();
var bodyParser = require('body-parser')

const CusIn = {
    "First Name": null,
    "Middle Name": null,
    "Last Name": null,
    "Sex": 'null',
    "Phone Number": null,
    "Email Address": null,
    "Date of birth": null,
    "Address": null,
},custColNames ={
    "First Name": 'fname',
    "Middle Name": 'mname',
    "Last Name": 'lname',
    "Sex": 'sex',
    "Phone Number": 'phoneNumber',
    "Email Address": 'emailAddress',
    "Date of birth": 'DOB',
    "Address": 'address',
}
var sql = '';

// Create connection

const db = mysql.createConnection({
    host : 'localhost',
    user: 'root',
    password: "",
    database: 'RMS',
})

db.connect((err)=>{
    if(err){
        console.error("Error on db connect");
    }
    console.log('MySQL connected'); 
})
 
app.use(express.urlencoded({extended:true}))
app.use(express.json())

 

app.post('/api/add', (req, res)=>{
    var data = req.body;

    db.query(data.sql, function (err, result) {
        if (err){
            console.log('Error in SQL Query')
            console.log('-> ' + sql);
            throw err;
        }            
        console.log("1 record inserted with following SQL query:");
        console.log('-> ' + data.sql);
      });
})

app.post('/api/del_customer', (req, res)=>{
    var data = req.body;
    sql = 'DELETE FROM CUSTOMERS WHERE';
    for (var i in CusIn){
        if(data[i] !== null){
            sql += (custColNames[i] + ',');
        }
    }
    sql = sql.slice(0, -1)
    sql += ") VALUES ("
    for (var i in CusIn){
        if(data[i] !== null){
            sql += ( "'" + data[i] + "'" + ',');
        }
    } 
    sql = sql.slice(0, -1)
    sql += ")"
    db.query(sql, function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
      });
})

app.post('/api/show_data/', (req, res)=>{
    var data = req.body;
    db.query(data.sql, (err, rows, fields)=>{
        if(err){
            console.log('Error in the query');
        }else{
            console.log('Data sent with following SQL query:');
            console.log('-> ' + data.sql);
            res.send(rows);
        }
    }) 
})
 

app.listen('4000', ()=>{ 
    console.log('Server started on port 4000');
});  