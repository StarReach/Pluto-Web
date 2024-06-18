// Load modules
import express from "express";
import cors from "cors";
import { mongoClient } from "./modules/mongo";
import http from "http";
import WebSocket from "ws";

// Initialize express application
const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

wss.on("connection", (ws) => {
  console.log("Client connected");

  ws.on("message", (data) => {
    // @ts-ignore
    const message = JSON.parse(data);

    console.log(
      `Received: ${message.content.toString()} from ${message.roomId}`
    );
    // Broadcast message to all connected clients
    wss.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(message.content.toString());
      }
    });
  });

  ws.on("close", () => {
    console.log("Client disconnected");
  });
});

// Initialize json middleware for reading data from POST requests
app.use(express.json());
// Initialize cors middleware for allowing cross origin requests sharing for all websites
app.use(cors());

// app.get("/api", async (req, res) => {res.status(200).json({ message: "Hello world" })})

// Connect MongoDB database
mongoClient.connect().then(() => {
  console.log("Successfully connected to MongoDB");
  // Listen requests on PORT
  server.listen(4000, () => {
    console.log(`listening on port ${4000}`);
  });
});
