// Load modules
import express from "express";
import cors from "cors";
import { mongoClient } from "./modules/mongo";

// Initialize express application
const app = express();

// Initialize json middleware for reading data from POST requests
app.use(express.json());
// Initialize cors middleware for allowing cross origin requests sharing for all websites
app.use(cors());

// app.get("/api", async (req, res) => {res.status(200).json({ message: "Hello world" })})

// Connect MongoDB database
mongoClient.connect().then(() => {
  console.log("Successfully connected to MongoDB");
  // Listen requests on PORT
  app.listen(4000, () => {
    console.log(`listening on port ${4000}`);
  });
});
