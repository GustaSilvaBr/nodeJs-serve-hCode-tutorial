module.exports = (app)=>{

    app.get('/users', (req, res)=>{
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
    
    
    app.post('/users', (req, res)=>{
        console.log(req.body);
        res.json(req.body);

    });
    
}/*as consing said, this file will be put into the app,
   so, the app "will come here" to get it.
*/