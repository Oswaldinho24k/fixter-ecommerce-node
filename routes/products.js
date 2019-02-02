const router = require('express').Router()
const Product = require('../models/Product')

router.get('/products', (req, res)=>{
  Product.find()
    .then(products=>{
      res.render('products',{products})
    }).catch(e=>res.send(e))
})

router.get('/products/detail/:id', (req, res)=>{
  Product.findById(req.params.id)
    .then(product=>{
      res.render('product-detail',product)
    }).catch(e=>res.send(e))
})

router.get('/products/new',(req, res)=>{
  res.render('product-form')
})

router.post('/products/new',(req, res)=>{
  Product.create(req.body)
    .then(r=>res.redirect('/products'))
    .catch(e=>res.send(e))
})




module.exports = router