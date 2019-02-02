const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productSchema = new Schema({
  name:String,
  price:Number,
  inStock:Boolean,
  inOffer:Boolean,
  offerPrice:Number,
  productImage:String,
  description:String,
  category:String,
},{
  timestamps:true
})

module.exports = mongoose.model('Product', productSchema)