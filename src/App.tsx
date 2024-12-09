import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginForm from "./components/LoginForm.tsx";
import SignUpForm from "./components/SignUpForm.tsx";
import Navbar from "./components/Navbar.tsx";
import HomePage from "./components/HomePage.tsx"; 


const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/" element={<LoginForm />} /> 
      </Routes>
    </Router>
  );
};

export default App;



