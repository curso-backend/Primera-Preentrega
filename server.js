const express = require('express');
const products = require('./routes/productos')
const carts = require('./routes/carrito')

const app = express();

const HOST = 8080 || process.env.PORT

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/static', express.static(__dirname + '/public'));

app.use('/api/products', products);
app.use('/api/carts', carts);

app.use('/', (req, res) => {
    res.send('Servidor corriendo en puerto 8080')
})

app.listen(HOST, () => {
    console.log('Running...')
})