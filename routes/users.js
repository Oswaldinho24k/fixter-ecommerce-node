const router = require('express').Router()
const User = require('../models/User')
const passport = require('../helpers/passport')



router.get('/login', (req, res)=>{
  res.render('login')
})
router.post('/login',passport.authenticate('local'), (req, res, next)=>{
  req.app.locals.loggedUser = req.user;  
})


router.get('/signup', (req, res, next)=>{
  res.render('signup')
})

router.post('/signup', (req, res, next)=>{
  User.register(req.body, req.body.password)
    .then(r=>res.redirect('/login'))
    .catch(e=>res.send(e))
})

router.get('/profile', (req, res)=>{
  User.findById(req.user._id)
    .then(r=>{
      res.render('profile', r)
    }).catch(e=>res.send(e))
})




module.exports = router