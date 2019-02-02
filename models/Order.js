const mongoose = require('mongoose')
const Schema = mongoose.Schema

const orderSchema = new Schema({
  userID:{
    type:mongoose.Types.ObjectId,
    ref:'User'
  },
  items:[
    {
      quantity:Number,
      product:{
        type:mongoose.Types.ObjectId,
        ref:'Product'
      }
    }
  ],
  paid:{
    type:Boolean,
    default:false
  }
},{
  timestamps:true
})

module.exports = mongoose.model('Order', orderSchema)