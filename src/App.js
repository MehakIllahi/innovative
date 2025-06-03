// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Services from "./pages/Services";
import Client from "./pages/Client/Client";
import Contact from "./pages/Contact/Contact";
import Header from "./components/Header/Header";
import Navbar from "./components/Header/Navbar";
import Footer from "./components/Footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => (
  <Router>
    <Header />
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/clients" element={<Client />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    <Footer />
  </Router>
);

export default App;
