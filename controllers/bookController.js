const Book = require("./../models/bookModel");

exports.getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();

    if (books.length >= 1) {
      res.status(200).send({
        status: "success",
        requestedAt: req.requestTime,
        bookCount: books.length,
        data: {
          books,
        },
      });
    } else {
      res.status(200).send({
        status: "no content in database",
        requestedAt: req.requestTime,
      });
    }
  } catch (error) {
    res.status(404).json({
      status: "failed",
      message: "Something went wrong",
    });
  }
};
exports.getOneBook = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (book) {
      res.status(200).send({
        status: "success",
        requestedAt: req.requestTime,
        data: {
          book,
        },
      });
    } else {
      res.status(404).json({
        status: "failed",
        message: "Book not found",
      });
    }
  } catch (error) {
    res.status(404).json({
      status: "failed",
      message: "Invalid id format",
    });
  }
};
exports.createBook = async (req, res) => {
  try {
    const newBook = await Book.create(req.body);

    res.status(201).json({
      status: "success",
      data: {
        book: newBook,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "failed",
      message: "Invalid data set",
    });
  }
};
exports.updateBook = async (req, res) => {
  try {
    const book = await Book.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      status: "success",
      data: {
        book,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "failed",
      message: "Invalid data set",
    });
  }
};
exports.deleteBook = async (req, res) => {
  try {
    await Book.findByIdAndDelete(req.params.id);
    res.status(200).json({
      status: "success",
      data: null,
    });
  } catch (error) {
    res.status(400).json({
      status: "failed",
      message: "Invalid data set",
    });
  }
};
