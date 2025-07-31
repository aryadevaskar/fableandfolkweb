"use client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/home/home";
import WorkDetailsSection from "./pages/Work/workDetails"; // Adjust path if needed

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work/:id" element={<WorkDetailsSection />} />
      </Routes>
    </Router>
  );
}

export default App;
