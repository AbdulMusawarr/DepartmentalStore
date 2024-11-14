const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_LOCAL_URI || "mongodb://127.0.0.1:27017/DepartmentStore" );
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    process.exit(1); // Exit process if unable to connect
  }
};




module.exports = connectDB;
