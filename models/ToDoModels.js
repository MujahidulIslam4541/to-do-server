const mongoose = require("mongoose");
const ToDoSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  isCompleted: {
    type: Boolean,
    default: false,
  },
});

const ToDo = mongoose.model("ToDo", ToDoSchema);
module.exports = ToDo;
