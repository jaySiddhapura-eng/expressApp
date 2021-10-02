const  express = require('express');
const app = express();
const { products } = require('./product')

app.get('/', (req,res)=>{
    res.send('<h1>Home Page</h1><a href="/api/products">Products</a>')
});

app.get('/api/products',(req,res)=>{
    const newProducts = products.map((product)=>{
        const {id, name, prop} = product;
        return {id, name, prop};
    })
    res.json(newProducts)
});

app.get('/api/products/:productID',(req,res)=>{
    console.log(req.params.productID);
    const productId = req.params.productID;
    console.log(productId);
    const singleProduct = products.find(
        (product)=> product.id === Number(productId)
        )
    if(singleProduct){
        res.json(singleProduct);
    }
    else{
        res.status(404);
        res.send('product does not exist');
    }
});

app.get('/api/products/:productId/review/:reviewId', (req, res)=>{
    console.log(req.params);
    res.send('you reached the multi params URL');
})

// app.get('/api/products/2',(req,res)=>{

//     const singleProduct = products.find((product)=> product.id === 2)
//     res.json(singleProduct);
// });

app.get('/api/v1/queryParams', (req, res)=>{
    const { search, limit } = req.query;
    let sortedProducts = [...products];

    if(search){
        sortedProducts = sortedProducts.filter((product)=>{
            return product.name.startsWith(search)
        });
       
    }
    if(limit){
        sortedProducts = sortedProducts.slice(0, Number(limit))
    }
    if(sortedProducts.length<1){
        res.status(200);
        res.send('no products matched your search');
    }
    res.status(200);
    res.json(sortedProducts)
});

app.listen(5000, ()=>{
    console.log('server listen on port 5000...');
});