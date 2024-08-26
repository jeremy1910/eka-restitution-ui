import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DashBoard from './Containers/Dashboard';
import Scenarios from './Containers/Scenarios';

function EkaRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/scenarios" element={<Scenarios />} />   
        <Route path="/" element={<Scenarios />} />
      </Routes>
    </Router>
  )
}

export default EkaRoutes