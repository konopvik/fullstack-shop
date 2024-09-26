import {getCategoriesController} from "../controllers/getCategories";

const express  = require('express');

const router = express.Router();

console.log('category route');

router.get('/', getCategoriesController);

module.exports = router;