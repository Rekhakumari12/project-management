const { validate, User } = require("../models/user")
const bcrypt = require("bcrypt")
const _ = require("lodash")

const register = async (req, res) => {
  console.log(req.body)
  const { error } = validate(req.body)
  if (error) return res.status(400).send({ error: error.details[0].message })
  
  //if user already present
  let user = await User.findOne({ email: req.body.email })
  if (user) return res.status(400).send({ error: "User already registered please login" })
  
  //one way
  // user = new User({
  //   name, email, password
  // })
  //User(_.pick(from where want data,['data1','data2']))
  user = new User(_.pick(req.body,['name','email','password','userType'])) 

  //encrypt password to save in db
  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt)
  
  //save 
  await user.save()
  res.status(200).send({message:"registration successfull"})
}
const login = async(req, res) => {
  try {
    const { email, password,userType } = req.body
    if (!email || !password ||!userType) {
      return res.status(400).send({error:"Please fill the credentials"})
    }
    const user = await User.findOne({ email: email })
    if (!user) return res.status(400).send({ error: "Wrong email or password or user" })
    const isMatch = await bcrypt.compare(password, user.password)
    if(!isMatch) return res.status(400).send({error:"Wrong email or password or user"})
    res.status(200).send({message:"login successfull"})
  }
  catch (e) {
    console.log("error", e)
    res.json(e)
  }
  
}
module.exports.register = register
module.exports.login=login