const Product = require('../models/product');
const Cart = require('../models/cart')

  exports.getProducts = (req, res, next) => {
      Product.fetchAll((products)=>{
        res.render('shop/product-list', { 
            prods: products,
            pageTitle: 'All Products',
            path: '/products',
          });      
      });
    
  };

  exports.getProduct = (req, res, next) =>{
    const prodId = req.params.productId;  //this productId declated in routs in shop.js 
    Product.findById(prodId, product => {
    res.render('shop/product-detail', {
      product:product, 
      pageTitle: product.title,
      path: '/products'
    });
    });
    
  }

  exports.getIndex = (req, res, next) => {
    Product.fetchAll((products)=>{
      res.render('shop/index', { 
          prods: products,
          pageTitle: 'Shop',
          path: '/',
          });      
    });
  };

  exports.getCart = (req, res, next) =>{
   res.render('shop/cart', {
    path: '/cart',
    pageTitle: 'Your Cart'
   }); 
  }

  exports.postCart = (req, res, next)  =>{
    const prodId = req.body.productId;
    Product.findById(prodId, (product)=>{
      Cart.addProduct(prodId, product.price)
    });
    res.redirect('/cart')
  }

  exports.orders = (req, res, next) =>{
    res.render('shop/orders', {
     path: '/orders',
     pageTitle: 'Your orders'
    }); 
   }


  exports.getCheckout = (req,res,next)=>{
    res.render('shop/checkouts', {

      path: '/checkout',
      pageTitle: 'Checkout'
    })
  }