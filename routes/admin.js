const path = require('path');

const express = require('express');

// const rootDir = require('../util/path');
const adminController = require('../controllers/admin');

const router = express.Router();


// /admin/add-product => GET
router.get('/add-product',adminController.getAddProducts);

// /admin/add-products => GET
router.get('/products', adminController.getProducts);


// /admin/add-product => POST
router.post('/add-product', adminController.postAddProduct);

module.exports = router;
// exports.routes = router;
// exports.products = products;
