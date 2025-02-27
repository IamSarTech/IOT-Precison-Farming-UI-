import React, { useState } from "react";
import axios from "axios";
import "./Global.css"; // Ensure global styles are included

export default function ChatBot() {
  const [message, setMessage] = useState(""); // User input message
  const [response, setResponse] = useState(""); // Chatbot's response
  const [isOpen, setIsOpen] = useState(false); // Show/Hide Chatbot
  const [loading, setLoading] = useState(false); // Loading state
  const [chatHistory, setChatHistory] = useState([]); // Stores conversation history

  const sendMessage = async () => {
    if (!message.trim()) return;

    setLoading(true);
    const newChatHistory = [...chatHistory, { sender: "user", text: message }];
    setChatHistory(newChatHistory);

    try {
      const res = await axios.post(
        "https://b1f8-2401-4900-6349-4dfc-b41a-73c8-7685-7a11.ngrok-free.app/predict",
        { message: message },
        { headers: { "Content-Type": "application/json" } }
      );

      const botResponse = res.data.reply || "🤖 AI did not respond.";
      setChatHistory([...newChatHistory, { sender: "bot", text: botResponse }]);
      setResponse(botResponse);
    } catch (error) {
      console.error("Error:", error);
      setChatHistory([...newChatHistory, { sender: "bot", text: "⚠ Could not connect to AI chatbot." }]);
      setResponse("⚠ Could not connect to AI chatbot.");
    } finally {
      setMessage(""); // ✅ Clears the input field after sending
      setLoading(false);
    }
  };

  return (
    <>
      {/* Chatbot Toggle Button */}
      <button className="chatbot-toggle" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "Close Chatbot ❌" : "Chat with AI 🤖"}
      </button>

      {/* Chatbot Mini Window */}
      {isOpen && (
        <div className="chatbot-container">
          <button className="chatbot-close" onClick={() => setIsOpen(false)}>×</button>
          <h2>FarmByte AI Chatbot</h2>

          <div className="chatbot-messages">
            {chatHistory.map((msg, index) => (
              <p key={index} className={`chat-message ${msg.sender}`}>
                <strong>{msg.sender === "user" ? "🧑 You:" : "🤖 AI:"}</strong> {msg.text}
              </p>
            ))}
          </div>

          {/* Input field */}
          <div className="chatbot-input-container">
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type a message..."
              className="chatbot-input"
            />
            <button onClick={sendMessage} disabled={loading} className="chatbot-send">
              {loading ? "Thinking..." : "Send"}
            </button>
          </div>
        </div>
      )}
    </>
  );
}
