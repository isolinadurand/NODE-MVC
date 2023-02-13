const express = require('express');
const app = express();
const productRoutes = require('./routes/products');
const mainRoutes = require('./routes/main');

const port = 3000;



app.listen(port, () => console.log(`Servidor corriendo en el puerto : ${port}`));


app.use('/', mainRoutes);
app.use('/products', productRoutes);
