import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import Routes

import Register from "./components/Register";
import SearchPage from "./components/SearchPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/SearchPage" element={<SearchPage />} />
      </Routes>
    </Router>
  );
}

export default App;
