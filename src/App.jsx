import React from "react";
import "./App.css";
import Splash from "./components/Splash";
import Landing from "./components/Landing";
import Home from "./components/Home";
import { TeamCards } from "./components/TeamCards";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Home/>
    </>
  );
};

export default App;
