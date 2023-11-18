import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Accelerator from "./components/Accelerator/Accelerator";
import Desc from "./components/Description/Desc";
import Feature from "./components/Features/Feature";
import Futures from "./components/Futures/Futures";
import Hero from "./components/Hero/Hero";
import SignUp from "./components/Signup/SignUp";

function App() {
  return (
    <div className="">
      <Router>
        <Routes>
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Router>
      <Hero />
      <Desc />
      <Feature />
      <Futures />
      <Accelerator />
    </div>
  );
}

export default App;
