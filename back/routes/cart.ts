import {getCartController} from "../controllers/getCart";
import {authenticateToken} from "../middleware/authenticate";

const express  = require('express');

const router = express.Router();

console.log('cart route');

router.get('/:userId', authenticateToken, getCartController);

module.exports = router;
