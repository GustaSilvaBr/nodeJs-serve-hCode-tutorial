const express = require("express");
const consign = require('consign');

let app = express();
 
app.use(express.json());

consign().include('routes').into(app);//put all files from routes folder into app

app.listen(3000, '127.0.0.1', ()=>{
    console.log('servidor rodando!');
})