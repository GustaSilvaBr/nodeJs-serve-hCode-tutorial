let NeDB = require('nedb');
let db = new NeDB({
    filename:'users.db',
    autoload:true,//create the file if dosn't exist
});

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
        

        db.insert(req.body, (err, user)=>{
            if(err){
                console.log(`error: ${err}`);
                res.status(400).json(user);
            }else{
                res.status(200).json(user);
            }
        });

    });
    
}/*as consing said, this file will be put into the app,
   so, the app "will come here" to get it.
*/