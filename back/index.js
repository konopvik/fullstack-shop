const express = require('express');
const { PrismaClient } = require('@prisma/client');
const app = express();
const port = process.env.PORT || 3001;

const prisma = new PrismaClient()

app.get('/', async (req, res) => {
    const products = await prisma.product.findMany()
    res.json(products)
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
