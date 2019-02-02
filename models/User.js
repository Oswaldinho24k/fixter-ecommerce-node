const mongoose = require('mongoose')
const plm = require('passport-local-mongoose')
const Schema = mongoose.Schema


const userSchema = new Schema({
  username:{
    type:String,
    required:true,
    unique:true
  },
  email:{
    type:String,
    required:true,
    unique:true
  },
  username:{
    type:Number,
    required:false,
    unique:true
  },
  address:String
},{
  timestamps:true
})

userSchema.plugin(plm,{usernameField:'email'})

module.exports = mongoose.model('User', userSchema)