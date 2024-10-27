import mongoose from "mongoose";

const Connection = async () => {
  try {
    const uri = process.env.MONGO_URL; // Ensure this is defined
    if (!uri) {
      throw new Error("MongoDB connection string (URL) is not defined in .env file.");
    }
    
    const connect = await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    
    console.log(`Connected to MongoDB: ${connect.connection.host}`);
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error.message}`);
  }
};

export default Connection;
