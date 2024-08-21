import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DashBoard from './Containers/Dashboard';

function EkaRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DashBoard />} />  
      </Routes>
    </Router>
  )
}

export default EkaRoutes