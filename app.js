const  express = require('express');
const app = express();
const routes = require('./Routes/homeControllerRoutes');

app.use('/',routes)
 
app.listen(5000, ()=>{
    console.log('server listen on port 5000...');
});


 