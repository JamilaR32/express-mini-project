const express = require("express");
const Book = require("../models/Book");
const {
  getAllBooks,
  getBookById,
  createBook,
  updateBookById,
  deleteBookById,
} = require("./controllers");
const upload = require("../middlewares/multer");

const router = express.Router();

router.param("id", async (req, res, next, id) => {
  const book = await Book.findById(id);
  if (!book) {
    return res.status(404).json({ msg: "Book with this id isn't Found" });
  }
  req.book = book;
  next();
});

router.get("/", getAllBooks);
router.get("/:id", getBookById);
router.post("/", upload.single("image"), createBook);
router.put("/:id", updateBookById);
router.delete("/:id", deleteBookById);
module.exports = router;
