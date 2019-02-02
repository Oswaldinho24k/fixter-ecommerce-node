const router = require('express').Router()
const Product = require('../models/Product')

router.post('/add/:productId', (req, res)=>{
  const {cart} = req.app.locals
  cart[req.params.productId]?cart[req.params.productId]++:cart[req.params.productId]=1
  console.log(cart)
  res.redirect('back')
})

router.get('/cart', (req, res)=>{
  const {cart} = req.app.locals
  Product.find({_id:{$in:Object.keys(cart)}})
    .then(products=>{
      let total = 0
      let items = products.map(p=>{
        newObject = {product:p,quantity:cart[p._id]}  
        total += p.price * cart[p._id]         
        return newObject
      })
      console.log(items)
      res.render('cart',{items, total})
    }).catch(e=>res.send(e))
})

module.exports = router