import React from "react";
import { Link } from "react-router-dom";
import "../Global.css";

export default function Header() {
  return (
    <header className="header">
      <div className="logo">🌿 IoT Farming</div>
      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/settings">Settings</Link>
      </nav>
    </header>
  );
}
