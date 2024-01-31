import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Calendar from './components/Calendar/Calendar';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* <Route path="/:year/:month" Component={Calendar} /> */}
        <Route path="https://dwayneprince.github.io/ps-calendar/:year/:month" element={<Calendar />} />

        <Route path="/*" element={<Navigate to="https://dwayneprince.github.io/ps-calendar/2023/6" />} />

      </Routes>
    </Router>
  );
};

export default App;
