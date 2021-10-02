const  express = require('express');
const app = express();
const logger = require('./logger');

app.use('/api',logger);

app.get('/', (req,res)=>{
    res.send('Home');
})

app.get('/about', (req,res)=>{
    res.send('About');
})

app.get('/api/product', (req,res)=>{
    res.send('products');
})

app.get('/api/items', (req,res)=>{
    res.send('items');
})

app.listen(5000, ()=>{
    console.log('server listen on port 5000...');
});

