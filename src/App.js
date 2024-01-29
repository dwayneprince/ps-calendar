import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Calendar from './components/Calendar/Calendar';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/:year/:month" Component={Calendar} />
      </Routes>
    </Router>
  );
};

export default App;
