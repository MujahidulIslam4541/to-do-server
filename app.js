require("dotenv").config()
const express = require("express")
const connectDb = require("./config/db")
const app = express()
const PORT=process.env.PORT;
// middleware
app.use(express.json())
app.use(express.urlencoded())


//  connectDb
connectDb()

app.get("/",(req,res)=>{
    res.send("my server runnigfgbfhfhgtgggjg")
})
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})