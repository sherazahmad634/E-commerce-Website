import "./App.css";
import React from "react";
import Navigation from "./customer/components/navigation/Navigation";
import HomePage from "./customer/pages/HomePage/HomePage";

function App() {
  return (
    <div className="">
      <Navigation />
      <div>
      <HomePage/>
      </div>
      
    </div>
  );
}

export default App;
