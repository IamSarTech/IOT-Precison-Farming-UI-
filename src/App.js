import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import IoTController from "./components/IoTController";
import Settings from "./components/Settings";
import ChatBot from "./ChatBot"; // Import ChatBot component

export default function App() {
  return (
    <Router>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/iot-control" element={<IoTController />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
      <ChatBot /> {/* Add Chatbot Button to All Pages */}
    </Router>
  );
}
