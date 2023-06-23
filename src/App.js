
import React from "react";
import './index.css';
import Home from "./router/Home";
import About from "./router/About";
import Projects from "./router/Projects";
import Contact from "./router/Contact";
import { Route, Routes } from "react-router-dom";
import CustomerProject from "./router/CustomerProject";


function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/projects" element={<Projects/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/customerProject" element={<CustomerProject/>}/>
    </Routes>
    </>
  );
}

export default App;
