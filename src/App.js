import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import HowItWorks from './HowItWorks';
import './App.css';
import AdditionalInformation from './AdditionalInformation'

function App() {
  return (
    <div className="App">
      <nav>
        <div className="logo">
          <Link to="/">GasYoFriends</Link>
        </div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/how-it-works">How It Works</Link></li>
          <li><Link to="/additional-information">Additional Info</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/additional-information" element={<AdditionalInformation />} />
      </Routes>
    </div>
  );
}

export default App;
