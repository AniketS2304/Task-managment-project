import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardLayout from './Components/layouts/DashboardLayout.jsx';
import AddTask from './pages/AddTask';
import TaskList from './pages/TaskList';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<DashboardLayout />} />
      </Routes>
    </Router>
  );
};

export default App;
