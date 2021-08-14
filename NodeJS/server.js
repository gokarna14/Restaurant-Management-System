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
        console.log(err)
        console.error("Error on db connect");
    }
    else{
        console.log('MySQL connected'); 
    }
})
 
app.use(express.urlencoded({extended:true}))
app.use(express.json())

 

app.post('/api/add', (req, res)=>{
    var data = req.body;

    db.query(data.sql, function (err, result) {
        if (err){
            console.log(err)
            console.log('Error in SQL Query')
            console.log('-> ' + data.sql);
        }   
        else{         
        console.log("1 record inserted with following SQL query:");
        console.log('-> ' + data.sql);
        res.send(result)
        }
      });
})



app.post('/api/show_data/', (req, res)=>{
    var data = req.body;
    db.query(data.sql, (err, rows, fields)=>{
        if(err){
            console.log(err)
            console.log('Error in SQL Query')
            console.log('-> ' + data.sql);
        }else{
            console.log('Data sent with following SQL query:');
            console.log('-> ' + data.sql);
            res.send(rows);
        }
    }) 
})

app.post('/api/execute/', (req, res)=>{
    var data = req.body;
    db.query(data.sql, (err, rows, fields)=>{
        if(err){
            console.log(err)
            console.log('Error in SQL Query')
            console.log('-> ' + data.sql);
        }else{
            console.log('Executed SQL query :');
            console.log('-> ' + data.sql);
            res.send(rows);
        }
        
    }) 
})
 

app.listen('4000', ()=>{ 
    console.log('Server started on port 4000');
});  