app.get('/', [middleware.requireAuthentication, middleware.logger], (req,res)=>{
    res.send('Home');
})