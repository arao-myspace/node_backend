const mongoose = require("mongoose");

const NoteSchema = new mongoose.Schema({
  title: {
    type: String,
    required: false,
  },
  body: {
    type: String,
    required: false,
  },
});

const Note = mongoose.model("Note", NoteSchema);

module.exports = Note;
