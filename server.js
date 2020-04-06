const express = require('express');
const bodyparser= require('body-parser');
const  mysq = require('mysql');
let  app = express();
app.use(bodyparser.json());

let mysqlconnection = mysq.createConnection({


    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'Library',
    multiplestatements : true

});

mysqlconnection.connect((err)=>{

if(!err){
    console.log('connected');

}else {
    console.log('connection failed'+ JSON.stringify(err,undefined,2));
}
});
console.log('outt')

//mysqlconnection.connect()

app.listen(3000,()=>console.log('express server is listning at 3000'));

app.get('/getBooks',(req,res)=>{
    mysqlconnection.query('Select * from Books',(err,rows,fields)=>{

        if(!err){
            res.send(rows);
            console.log(rows);

        }else {

            console.log(err);
        }
    })
});
