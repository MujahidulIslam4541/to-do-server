const express = require("express")
const router = express.Router()
const { createItem, getItems, updateItem, deleteItem } = require("../controller/TodoController")

router.post("/create-item", createItem)
router.get("/getItems", getItems)
router.patch("/update-item/:id", updateItem)
router.delete("/delete-item/:id", deleteItem)

module.exports = router
