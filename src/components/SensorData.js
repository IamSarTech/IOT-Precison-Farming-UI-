import React, { useState, useEffect } from "react";
import { db } from "../firebase"; 
import { collection, query, orderBy, limit, onSnapshot } from "firebase/firestore";
import "../Global.css";

const SensorData = () => {
  const [sensorData, setSensorData] = useState({
    temperature: "--",
    humidity: "--",
    soilMoisture: "--",
  });

  useEffect(() => {
    const fetchSensorData = () => {
      const sensorCollection = collection(db, "sensorData");
      const q = query(sensorCollection, orderBy("timestamp", "desc"), limit(1));

      const unsubscribe = onSnapshot(q, (snapshot) => {
        if (!snapshot.empty) {
          const latestData = snapshot.docs[0].data();
          setSensorData({
            temperature: latestData.temperature || "--",
            humidity: latestData.humidity || "--",
            soilMoisture: latestData.soilMoisture || "--",
          });
        }
      });

      return unsubscribe;
    };

    const unsubscribe = fetchSensorData();
    return () => unsubscribe(); // Cleanup listener when component unmounts
  }, []);

  return (
    <div className="page-container">
      <div className="page-header">
        <h1>SENSOR DATA</h1>
        <p>Monitor real-time data from IoT sensors</p>
      </div>

      <div className="page-content">
        <div className="page-card">
          <h2>Temperature</h2>
          <p>{sensorData.temperature} °C</p>
        </div>
        <div className="page-card">
          <h2>Humidity</h2>
          <p>{sensorData.humidity} %</p>
        </div>
        <div className="page-card">
          <h2>Soil Moisture</h2>
          <p>{sensorData.soilMoisture} %</p>
        </div>
        <button className="page-button" onClick={() => window.history.back()}>
          Go Back
        </button>
      </div>
    </div>
  );
};

export default SensorData;
