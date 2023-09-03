import mongoose from "mongoose";

let isConnected = false;

export const connectToAtlas = async () => {
  if(isConnected) {
    console.log("=> using existing database connection");
    return;
  }
  try {
    await mongoose.connect(process.env.MONGO_URI);
    isConnected = true;
    console.log("MongoDB is connected.");
  } catch (error) {
    console.error(error.message);
  }
}