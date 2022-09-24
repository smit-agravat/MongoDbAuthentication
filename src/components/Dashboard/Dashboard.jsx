import React from "react";
import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <h4>
        <Link to="/login">Login</Link>
      </h4>
    </div>
  );
}
