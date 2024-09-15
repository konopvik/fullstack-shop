import {getProductsController} from "../controllers/getProducts";
import {getProductByNameController} from "../controllers/getProductByName";

const express  = require('express');

const router = express.Router();

console.log('customers route');

router.get('/', getProductsController);

router.get('/product/:productName', getProductByNameController);

module.exports = router;