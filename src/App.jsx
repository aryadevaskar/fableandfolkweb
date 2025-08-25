"use client";
import {Routes, Route } from "react-router-dom";
import Home from './pages/Home/home.jsx';
import WorkDetailsSection from "./pages/Work/workDetails"; // Adjust path if needed

function App() {
  return (
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work/:id" element={<WorkDetailsSection />} />
      </Routes>
    
  );
}

export default App;
