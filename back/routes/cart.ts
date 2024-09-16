import {getCartController} from "../controllers/getCart";

const express  = require('express');

const router = express.Router();

console.log('cart route');

router.get('/:userId', getCartController);

module.exports = router;
