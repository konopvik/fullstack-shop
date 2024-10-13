const express = require('express');
const { PrismaClient } = require('@prisma/client');
const cors = require('cors');
const app = express();
const port = 3001;
const body = require('body-parser');

const prisma = new PrismaClient()

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));

// body parser

app.use(body.json({
    limit: '500kb'
}));

// Routes

app.use('/products', require('./routes/products'));
app.use('/authorization', require('./routes/authorization'));
app.use('/cart', require('./routes/cart'));
app.use('/categories', require('./routes/categories'))




app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
