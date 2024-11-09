// src/App.js

import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './pages/Home'; // Ensure capitalization is correct

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Add other routes here as needed */}
      </Routes>
    </Router>
  );
}

export default App;

