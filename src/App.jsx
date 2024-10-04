import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Doctors from "./components/Doctors";
import Blogs from "./components/Blogs";
import Footer from "./components/Footer";
import Doctordescription from "./components/Doctordescription";

const App = () => {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/blog" element={<Blogs />} />
          <Route path="/doctordescription" element={<Doctordescription />} />
          <Route path="*" element={<div>404 Page Not Found</div>} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
