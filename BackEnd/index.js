require('dotenv').config();

const express = require('express');
const cors = require('cors');
const app = express();
const { dbConnection } = require('./database/conection')


//CORS
app.use( cors() );

//Parseo y lectura del body
app.use( express.json() )

//rutas
app.use('/api/users', require('./routers/users'));
app.use('/api/products', require('./routers/products'));
app.use('/api/uploads', require('./routers/uploads'));
app.use('/api/auth', require('./routers/auth'));
app.use('/api/brands', require('./routers/brand'));
app.use('/api/province', require('./routers/province'));
app.use('/api/categorie', require('./routers/categories'));
app.use('/api/subcategorie', require('./routers/subcategories'));
app.use('/api/payments', require('./routers/Payments'));
app.use('/api/coments', require('./routers/coment'));

app.listen(process.env.PORT, ()=>{
    dbConnection();
    console.log("Server on port ",process.env.PORT);
})