import {getAuthController} from "../controllers/getAuth";

const express  = require('express');

const router = express.Router();

console.log('auth route');

router.get('/', getAuthController);

module.exports = router;


