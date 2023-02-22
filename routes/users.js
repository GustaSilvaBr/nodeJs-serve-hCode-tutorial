const express = require('express');
const routes = express.Router();

routes.get('/', (req, res)=>{
    res.statusCode= 200;
    res.setHeader('Content-Type', 'application/json');
    res.json({
        users: [{
            name:'Gustavo',
            email:'gustavo.silva@gmail.com',
            id:1
        }]
    });
});


routes.get('/admin', (req, res)=>{
    res.statusCode= 200;
    res.setHeader('Content-Type', 'application/json');
    res.json({
        users: []
    });
});


module.exports = routes;