const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  pageCount: {
    type: Number,
    required: true,
  },
  publishedDate: {
    date: {
      type: Date,
      default: Date.now(),
    },
  },
  thumbnailUrl: {
    type: String,
    required: true,
    trim: true,
  },
  shortDescription: {
    type: String,
    default: "Lorem ipsum dolor sit amet",
    trim: true,
  },
  longDescription: {
    type: String,
    default: "lorem ipsum dolor sit amet consectetur adipiscing elit...",
    trim: true,
  },
  status: {
    type: String,
    required: true,
  },
  authors: {
    type: Array,
  },
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
