const express = require("express")
const router = express.Router()
const { createItem, getItems } = require("../controller/TodoController")

router.post("/create-item", createItem)
router.get("/getItems", getItems)

module.exports = router
