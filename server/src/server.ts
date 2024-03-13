// Load modules
import express from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";

// Access environment variables from local .env file
// PORT is 4000 but for the MONGO_URI you may need to create your own database for testing this application and store it's uri in a .env file.
// If you want to access the real database we use, then you better ask the project's admins or moderators for uri.

// Initialize express application
const app = express();

// Initialize json middleware for reading data from POST requests
app.use(express.json());
// Initialize cors middleware for allowing cross origin requests sharing for all websites
app.use(cors());

// app.get("/api", async (req, res) => {res.status(200).json({ message: "Hello world" })})

// Connect MongoDB database with MongoDB database URI
mongoose.connect(process.env.MONGO_URI! as string).then(() => {
  console.log("Successfully connected to MongoDB");
  // Listen requests on PORT
  app.listen(4000, () => {
    console.log(`listening on port ${4000}`);
  });
});
