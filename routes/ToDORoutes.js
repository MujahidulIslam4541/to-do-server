const express = require("express")
const router = express.Router()
const { createItem, getItems, updateItem } = require("../controller/TodoController")

router.post("/create-item", createItem)
router.get("/getItems", getItems)
router.patch("/update-item/:id", updateItem)

module.exports = router
