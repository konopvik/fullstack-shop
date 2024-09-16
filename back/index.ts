const express = require('express');
const { PrismaClient } = require('@prisma/client');
const app = express();
const port = process.env.PORT || 3001;
const body = require('body-parser');

const prisma = new PrismaClient()

// body parser

app.use(body.json({
    limit: '500kb'
}));

// Routes

app.use('/products', require('./routes/products'));
app.use('/authorization', require('./routes/authorization'));


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
