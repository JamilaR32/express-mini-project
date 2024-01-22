const Book = require("../models/Book");

const getAllBooks = async (req, res, next) => {
  try {
    const books = await Book.find();
    return res.status(200).json(books);
  } catch (error) {
    console.log("bad server", error);
    next(error);
  }
};

const getBookById = (req, res, next) => {
  try {
    const bookfetched = req.book;
    return res.status(200).json(bookfetched);
  } catch (error) {
    next(error);
  }
};

const createBook = async (req, res, next) => {
  try {
    if (req.file) {
      req.body.image = req.file.path;
    }
    const book = req.body;
    await Book.create(book);
    return res.status(201).json(book);
  } catch (error) {
    next(error);
  }
};

const updateBookById = async (req, res, next) => {
  try {
    await req.book.updateOne(req.body);
    return res.status(204).end();
  } catch (error) {
    next(error);
  }
};

const deleteBookById = async (req, res, next) => {
  try {
    await req.book.deleteOne(req.body);
    return res.status(200).json("Book Deleted");
  } catch (error) {
    next(error);
  }
};
module.exports = {
  getAllBooks,
  getBookById,
  createBook,
  updateBookById,
  deleteBookById,
};
