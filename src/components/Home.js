import React from "react";
import "../Global.css"; // Import global CSS
import backgroundImage from "../assets/background.png"; // Ensure this image exists in the assets folder

export default function Home() {
  return (
    <div
      className="home-container"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover", // Ensure the image covers the entire container
        backgroundPosition: "center", // Center the image
      }}
    >
      {/* Main Title */}
      <h1 className="main-title">FARMBYTE</h1>

      {/* Subtitle */}
      <p className="subtitle">Your Everyday Agriculture Assist 🌱</p>

      
    </div>
  );
}