import React from "react";
import { Route, Routes } from "react-router-dom";

import "./App.css";
import Dashboard from "./pages/Dashboard";
import SuspenseWrapper from "./components/SuspenseWrapper";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}>
        <Route
          path="/courses"
          element={<SuspenseWrapper path="pages/UserCourses" />}
        />
        <Route
          path="/results"
          element={<SuspenseWrapper path="pages/UserResults" />}
        />

        {/* <Route path="/courses" element={<UserCourses />} />
        <Route path="/results" element={<UserResults />} /> */}
      </Route>
      <Route
        path="*"
        element={
          <div style={{ padding: "1rem" }}>
            <h3>Page Not Found!</h3>
          </div>
        }
      />
    </Routes>
  );
}

export default App;
