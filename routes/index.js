module.exports = (app)=>{
    app.get('/', (req, res)=>{
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end('<h1>Olá</h1>');
    });
}/*as consing said, this file will be put into the app,
   so, the app "will come here" to get it.
*/