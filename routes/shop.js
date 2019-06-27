const path = require('path');

const express = require('express');
const shopController = require('../controllers/shop');
const router = express.Router();

router.get('/', shopController.getIndex );

router.get('/products', shopController.getProducts);

router.get('/products/:productId', shopController.getProduct); //productId this name could be any and can extract info by this name


router.get('/cart', shopController.getCart);

router.post('/cart', shopController.postCart);

router.get('/orders', shopController.orders);

router.get('/checkout', shopController.getCheckout);

module.exports = router;
