const express = require("express")
const router = express.Router()
const { createItem } = require("../controller/TodoController")

router.post("/create-item", createItem)

module.exports = router
