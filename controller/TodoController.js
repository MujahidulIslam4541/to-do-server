const ToDo = require("../models/ToDoModels");

const createItem = async (req, res) => {
  try {
    const { title, isCompleted } = req.body;
    const newItem = new ToDo({ title, isCompleted });
    await newItem.save();
    res.status(201).json({
      status: 201,
      message: "To-Do item created successfully",
      data: newItem,
    });
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

const getItems = async (req, res) => {
  try {
    const items = await ToDo.find();
    res.status(200).json({
      status: 200,
      message: "To-Do items retrieved successfully",
      data: items,
    });
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

const updateItem = async (req, res) => {
  try {
    const itemId = req.params.id;
    const { title, isCompleted } = req.body;
    const updatedItem = await ToDo.findByIdAndUpdate(
      itemId,
      { title, isCompleted },
      { new: true }
    );
    if (!updatedItem) {
      return res.status(404).json({
        status: 404,
        message: "To-Do item not found",
      });
    }
    res.status(200).json({
      status: 200,
      message: "To-Do item updated successfully",
      data: updatedItem,
    });
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

module.exports = { createItem, getItems, updateItem };
