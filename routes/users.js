let NeDB = require('nedb');
let db = new NeDB({
    filename:'users.db',
    autoload:true,//create the file if dosn't exist
});//é uma instância do db exatamente feita para o arquivo de users

module.exports = (app)=>{

    const route = app.route('/users');

    route.get((req, res)=>{

        db.find({}).sort({name:1}).exec((err, users)=>{
        
            if(err){
                app.utils.error.send(err, req, res);
            }else{
                res.setHeader('Content-Type', 'application/json');
                res.status(200).json({users})
            }
    
        });
    });

    
    route.post((req, res)=>{

        db.insert(req.body, (err, user)=>{
            if(err){
                app.utils.error.send(err, req, res)
            }else{
                res.status(200).json(user);
            }
        });

    });

    const routeId = app.route('/users/:id');

    routeId.get((req, res)=>{

        db.findOne({_id:req.params.id}).exec((err, user)=>{
            if(err){
                app.utils.send(err, req, res);
            }else{
                res.setHeader('Content-Type', 'application/json');
                res.status(200).json({user});
            }
        });

    });

    routeId.put((req, res)=>{

        db.update({_id: req.params.id}, req.body, err=>{
            if(err){
                app.utils.error.send(err, req, res);
            }else{
                res.status(200).json(Object.assign(req.params, req.body));
            }
        });

    });
    
}/*as consing said, this file will be put into the app,
   so, the app "will come here" to get it.
*/