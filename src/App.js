import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Event from "./components/Event";
import Features from "./components/Features";
import CoreValue from "./components/CoreValue";
import Home from "./components/Home";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsOfService from "./components/TermsOfService"; // Assuming you have this component
import ContactUs from "./components/ContactUs"; // Assuming you have this component
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar">
          <div className="container">
            <h1 className="logo">PSITS</h1>
            <ul className="nav-links">
              <li>
                <Link to="/">Home</Link> {/* Added Home link */}
              </li>
              <li>
                <Link to="/event">Event</Link>
              </li>
              <li>
                <Link to="/features">Features</Link>
              </li>
              <li>
                <Link to="/corevalue">Core Values</Link>
              </li>
            </ul>
          </div>
        </nav>
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/event" element={<Event />} />
            <Route path="/features" element={<Features />} />
            <Route path="/corevalue" element={<CoreValue />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfService />} /> {/* Assuming you have this component */}
            <Route path="/contact" element={<ContactUs />} /> {/* Assuming you have this component */}
          </Routes>
        </div>
        
        <footer className="footer">
          <div className="container">
            <p>© 2024 PSITS. All rights reserved.</p>
            <ul className="footer-links">
              <li><Link to="/privacy">Privacy Policy</Link></li>
              <li><Link to="/terms">Terms of Service</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
