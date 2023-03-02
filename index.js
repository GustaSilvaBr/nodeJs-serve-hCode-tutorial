const express = require("express");
const consign = require('consign');

let app = express();

app.use(express.json({ limit: '50mb' }));

consign().include('utils').include('routes').into(app);//put all files from routes folder into app

app.listen(4000, '127.0.0.1', () => {

    console.log('servidor rodando!');
})