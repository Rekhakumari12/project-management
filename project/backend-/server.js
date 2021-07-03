const dotenv = require("dotenv")
const cors = require("cors")
const express = require("express")
dotenv.config({ path: './config.env' })
const auth = require('./routers/auth')
const { urlencoded } = require("express")

//required connectiong
require('./db/connection')

//creating app
const app = express()

//required model
// const User = require('./models/userSchema')

//Middlewares
app.use(express.json())
app.use(urlencoded())
app.use(cors())

//linking to routers
app.use('/api/auth',auth)

if (process.env.NODE_ENV == "production") {
  app.use(express.static("project-management/build"))
}
const port = process.env.PORT||5000
app.listen(port, () => {
  console.log(`connected to ${port}`)
})