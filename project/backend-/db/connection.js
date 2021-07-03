const mongoose = require("mongoose")
const dotenv = require("dotenv")
const DB = process.env.DATABASE
mongoose.connect(DB, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })
  .then(() => console.log("database connected.."))
  .catch((e) => console.log("error while connecting"))
