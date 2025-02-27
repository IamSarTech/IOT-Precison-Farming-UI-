const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000; // Change if needed

app.use(cors());
app.use(express.json()); // Middleware to parse JSON data

// Store sensor data
let sensorData = {
  rain: null,
  soilMoisture: null,
};

// Endpoint to receive data from ESP32
app.post("/sensor-data", (req, res) => {
  const { rain, soilMoisture } = req.body;

  if (rain !== undefined && soilMoisture !== undefined) {
    sensorData.rain = rain;
    sensorData.soilMoisture = soilMoisture;
    console.log("Received Sensor Data:", sensorData);
    res.json({ message: "Data received successfully", sensorData });
  } else {
    res.status(400).json({ error: "Invalid data format" });
  }
});

// Endpoint for frontend to fetch latest sensor data
app.get("/sensor-data", (req, res) => {
  res.json(sensorData);
});

// Start server
app.listen(PORT, () => {
  console.log(`ESP Service running on http://localhost:${PORT}`);
});
