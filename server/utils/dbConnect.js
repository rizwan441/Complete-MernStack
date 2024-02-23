import mongoose from "mongoose";

const connectToMongoDB = async () => {
  const DB_URL = process.env.MONGOURI;
  try {
    // Replace "your_database_name" with your actual database name
    await mongoose.connect(DB_URL);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1); // Exit the process with a non-zero exit code to indicate failure
  }
};

export default connectToMongoDB;
