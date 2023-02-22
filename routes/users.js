let NeDB = require('nedb');
let db = new NeDB({
    filename:'users.db',
    autoload:true,//create the file if dosn't exist
});//é uma instância do db exatamente feita para o arquivo de users

module.exports = (app)=>{


    app.get('/users', (req, res)=>{

        db.find({}).sort({name:1}).exec((err, users)=>{
        
            if(err){
                app.utils.error.send(err, req, res);
            }else{
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.status(200).json({users})
            }
    
        });
    });

    
    app.post('/users', (req, res)=>{

        db.insert(req.body, (err, user)=>{
            if(err){
                app.utils.error.send(err, req, res)
            }else{
                res.status(200).json(user);
            }
        });
        
    });
    
}/*as consing said, this file will be put into the app,
   so, the app "will come here" to get it.
*/