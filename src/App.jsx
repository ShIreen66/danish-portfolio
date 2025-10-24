import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/about";
import CaseModel from "./components/CaseModel";
import Alsco from "./components/alsco";
import Moneyspot from "./components/moneyspot";
import Classcade from "./components/classcade";
import GalleryPage from "./components/GalleryPage";
import CaseStudies from "./components/CaseModel";
import CaseStudyPage from "./pages/CaseStudyPage";


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/casemodel" element={<CaseModel />} />
        <Route path="/gallery" element={<GalleryPage />} />
         <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/case-study/:id" element={<CaseStudyPage />} />
        <Route path="/alsco" element={<Alsco />} />
        <Route path="/moneyspot" element={<Moneyspot />} />
        <Route path="/classcade" element={<Classcade />} />
      </Routes>
    </Router>
  );
}

export default App;
