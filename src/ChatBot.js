import React, { useState } from "react";
import axios from "axios";
import "./Global.css"; // Ensure global styles are included

export default function ChatBot() {
  const [message, setMessage] = useState(""); // User input message
  const [response, setResponse] = useState(""); // Chatbot's response
  const [isOpen, setIsOpen] = useState(false); // Show/Hide Chatbot
  const [loading, setLoading] = useState(false); // Loading state

  const sendMessage = async () => {
    if (!message.trim()) return;

    setLoading(true); // Show loading state

    try {
      const res = await axios.post(
        "https://b1f8-2401-4900-6349-4dfc-b41a-73c8-7685-7a11.ngrok-free.app/predict",  
        { message: message },
        { headers: { "Content-Type": "application/json" } }
      );

      setResponse(res.data.reply || "🤖 AI did not respond."); // Handle missing responses
    } catch (error) {
      console.error("Error:", error);
      setResponse("⚠️ Could not connect to AI chatbot.");
    } finally {
      setLoading(false); // Hide loading state
    }
  };

  return (
    <>
      {/* Chatbot Toggle Button */}
      <button className="chatbot-toggle" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "Close Chatbot ❌" : "Chat with AI 🤖"}
      </button>

      {/* Chatbot Window */}
      {isOpen && (
        <div className="chatbot-container">
          <h2>FarmByte AI Chatbot</h2>

          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type a message..."
          />

          <button onClick={sendMessage} disabled={loading}>
            {loading ? "Thinking..." : "Send"}
          </button>

          {response && (
            <p>
              <strong>🤖 AI:</strong> {response}
            </p>
          )}
        </div>
      )}
    </>
  );
}
