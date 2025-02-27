import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "../Global.css"; // Import CSS file
import backgroundImage from "../assets/background.png"; // Ensure the correct path

export default function Dashboard() {
  const navigate = useNavigate(); // Initialize navigation

  return (
    <div
      className="dashboard-container"
      style={{
        backgroundImage: `url(${backgroundImage})`, // Apply the same background as Home
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Top Section */}
      <header className="dashboard-header">
        <h1>Dashboard</h1>
        <p>Manage Your Agriculture IoT System</p>
      </header>

      {/* Dashboard Sections */}
      <div className="dashboard-content">
        <div className="card">
          <h2>Sensor Data</h2>
          <p>Monitor real-time data from IoT sensors.</p>
          <button className="control-button"onClick={() => navigate("/sensor-data")}>View Data</button>
        </div>
        <div className="card">
          <h2>Device Control</h2>
          <p>Turn ON/OFF irrigation and other devices.</p>
          <button className="control-button" onClick={() => navigate("/iot-control")}>
            Go to IoT Control
          </button>
        </div>
      </div>
    </div>
  );
}
