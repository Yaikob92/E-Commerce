import mongoose from "mongoose";
import { ENV } from "../config/env.js";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(ENV.DB_URL);
    console.log(`Database connected successfully: ${conn.connection.host}`);
  } catch (error) {
    console.log(`Database connection failed: ${error.message}`);
    process.exit(1);
  }
};
