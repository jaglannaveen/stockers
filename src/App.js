import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import React from "react";


import MainRoute from "./routes/MainRoute";
function App() {
  return (
    <Router>
    <Routes>
      <Route exact path="/" element={<MainRoute />} />
    </Routes>
    </Router>
  );
}

export default App;
