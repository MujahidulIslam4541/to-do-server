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

module.exports = { createItem };
