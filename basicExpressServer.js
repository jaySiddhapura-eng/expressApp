const express = require('express');
const app = express();

app.get('/', (req, res)=>{
    res.send('Home Page')
})

app.get('/about', (req, res)=>{
    res.send('About page')
})

app.all('*', (req,res)=>{
   res.status(404);
   res.send('resource not found');
})


app.listen(5000, ()=>{
    console.log('server is listening on port 5000...');
})

//app.http verbs
