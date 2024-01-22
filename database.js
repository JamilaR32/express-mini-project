const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_LINK);
    console.log("Connected to the Database !");
  } catch (error) {
    console.log("Couldn't Connect to the Database", error);
  }
};

module.exports = connectDB;
