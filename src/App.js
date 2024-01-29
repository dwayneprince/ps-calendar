import React from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Routes,
  Route,
} from 'react-router-dom';
import Calendar from './components/Calendar/Calendar';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/:year/:month" Component={Calendar} />
        {/* <Redirect from="/" to="/2024/1" /> */}
      </Routes>
    </Router>
  );
};

export default App;
