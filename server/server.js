// Load modules
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

// Access environment variables from local .env file
dotenv.config();
// PORT is 4000 but for the MONGO_URI you may need to create your own database for testing this application and store it's uri in a .env file.
// If you want to access the real database we use, then you better ask the project's admins or moderators for uri.
PORT = process.env.PORT;
MONGO_URI = process.env.MONGO_URI;

// Initialize express application
const app = express();

// Initialize json middleware for reading data from POST requests
app.use(express.json());
// Initialize cors middleware for allowing cross origin requests sharing for all websites
app.use(cors());

// Connect MongoDB database with MongoDB database URI
mongoose.connect(MONGO_URI).then(() => {
  console.log("Successfully connected to MongoDB");
  // Listen requests on PORT
  app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
  });
});
