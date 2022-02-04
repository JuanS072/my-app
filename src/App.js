import React from "react";
import './App.css';
// import {BrowserRouter} from "react-router-dom"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Initial from "./Components/Initial";
import AboutMe from "./Components/AboutMe";
import ContactMe from "./Components/ContactMe";
import MyProjects from "./Components/MyProjects";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import n from "./Components/CssModules/Initial.module.css"
import Cv from "./Components/Cv";
function App() {
  return (
     <Router>
    <div className={n.imgBackground}>
    <Routes>
     <Route path="/" element={<Initial/>}/>
      <Route path="/AboutMe" element={<AboutMe/>}/>
      <Route path="/MyProjects" element={<MyProjects/>}/>
      <Route path="/ContactMe" element={<ContactMe/>}/>
      <Route path="/CV" element={<Cv/>}/>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
