import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TopBar } from "./components/Topbar";
import ContactSticky from "./components/ContactSticky";
import { Navbar } from "./components/Navbar";
import Homepage from "./pages/Homepage";
import { Footer } from "./components/Footer";
import AboutPage from "./pages/AboutPage";

function App() {
  return (
    <BrowserRouter>
      <TopBar />
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
      <ContactSticky />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
