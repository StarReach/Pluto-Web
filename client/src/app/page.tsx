"use client";

import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";

export default function Home() {
  const [messages, setMessages] = useState<any>([]);
  const [input, setInput] = useState("");
  const [ws, setWs] = useState<any>(null);

  useEffect(() => {
    const socket = new WebSocket("ws://localhost:4000");
    setWs(socket);

    socket.onopen = () => {
      console.log("Connected to WebSocket server");
    };

    socket.onmessage = (event) => {
      setMessages((prevMessages: any) => [...prevMessages, event.data]);
    };

    socket.onclose = () => {
      console.log("Disconnected from WebSocket server");
    };

    socket.onerror = (error) => {
      console.error("WebSocket error:", error);
    };

    return () => {
      socket.close();
    };
  }, []);

  const sendMessage = () => {
    if (ws) {
      console.log(input);
      ws.send(input);
      setInput("");
    }
  };

  return (
    <div className="w-full h-screen bg-white">
      {/* <Navbar currentState="Logged out" displayingPage="Home" /> */}
      <div>
        <h1>WebSocket Chat</h1>
        <div>
          {messages.map((message: any, index: any) => (
            <p key={index}>{message}</p>
          ))}
        </div>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}
