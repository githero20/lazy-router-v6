import React from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div style={{ padding: "1rem" }}>
      <h1>Dashboard Header</h1>
      <hr style={{ borderWidth: 1 }} />
      <Link to="/courses" style={{ marginBottom: "1rem" }}>
        View your courses
      </Link>
      <br />
      <Link to="/results">Check your results</Link>
      <Outlet />
    </div>
  );
};

export default Dashboard;
