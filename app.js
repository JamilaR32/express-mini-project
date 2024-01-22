const express = require("express");
const morgan = require("morgan");
const connectDB = require("./database");
const bookRouter = require("./api/routes");
const cors = require("cors");
const app = express();
const PORT = 8000;

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());
app.use("/mylibrary", bookRouter);
app.use((req, res, next) => {
  return res.status(404).json("Path Not Found");
});

app.use((err, req, res, next) => {
  return res.status(err.status || 500).json(err.message || "Server Error");
});
connectDB();

app.listen(PORT, () => {
  console.log(`I'm running on port ${PORT}`);
});
