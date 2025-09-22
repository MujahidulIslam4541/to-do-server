const mongoose = require("mongoose");
const ToDoSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    isCompleted: {
      type: Boolean,
      default: false,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const ToDo = mongoose.model("ToDo", ToDoSchema);
module.exports = ToDo;
