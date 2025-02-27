import React, { useState } from "react";
import "../Global.css"; // Import global CSS
import backgroundImage from "../assets/background.png"; // Ensure the image exists in assets

export default function IoTControl() {
  // State for controlling irrigation system
  const [isIrrigationOn, setIsIrrigationOn] = useState(false);

  // State for rain sensor (true = raining, false = not raining)
  const [isRaining, setIsRaining] = useState(false);

  // Function to toggle irrigation system
  const toggleIrrigation = () => {
    setIsIrrigationOn(!isIrrigationOn);
    alert(`Irrigation System is now ${isIrrigationOn ? "OFF" : "ON"}`);
  };

  // Function to simulate rain sensor (you can connect this to real sensor data later)
  const checkRainStatus = () => {
    // Simulating rain detection (toggle between raining and not raining)
    setIsRaining(!isRaining);
  };

  return (
    <div
      className="iot-container"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Page Header */}
      <header className="dashboard-header">
        <h1>IoT Control Panel</h1>
        <p>Manage Your Smart Farming Devices</p>
      </header>

      {/* IoT Control Sections */}
      <div className="dashboard-content">
        {/* Irrigation System */}
        <div className="card">
          <h2>Irrigation System</h2>
          <p>Control the water pump for your crops.</p>
          <button className="control-button" onClick={toggleIrrigation}>
            {isIrrigationOn ? "Turn OFF" : "Turn ON"}
          </button>
        </div>

        {/* Rain Sensor */}
        <div className="card">
          <h2>Rain Sensor</h2>
          <p>
            {isRaining ? "🌧️ It is Raining" : "☀️ No Rain Detected"}
          </p>
          <button className="control-button" onClick={checkRainStatus}>
            Check Rain Status
          </button>
        </div>
      </div>
    </div>
  );
}
