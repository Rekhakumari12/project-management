const mongoose = require("mongoose")
const joi = require("joi")
//structure of document
const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlenght: 2,
    malength:255
  },
  email: {
    type: String,
    required:true,
    unique: true,
    minlength: 10,
    maxlength:255
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
    maxlength:255
  },
  userType: {
    type: String,
    required: true,
    minlength: 3,
    maxlength:255
  }
},{timestamps:true})
const User = mongoose.model("user", userSchema)
function validateUser(user) {
  const schema = joi.object({
    name: joi.string().min(3).max(255).required(),
    email: joi.string().min(10).max(255).email().required(),
    password: joi.string().min(5).max(255).required(),
    userType:joi.string().min(3).max(255).required()
  })
  return schema.validate(user)
}
module.exports.User = User
module.exports.validate=validateUser