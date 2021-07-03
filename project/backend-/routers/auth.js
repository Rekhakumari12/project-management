const express = require("express")
const router = express.Router()
const { register,login } = require('../controller/auth')
const middleware = () => {
  next()
}
router.post('/register', register)
router.post('/login', login)
router.get('/dashboard', middleware,(req, res) => {
  res.send("dashboard in development")
})

module.exports=router