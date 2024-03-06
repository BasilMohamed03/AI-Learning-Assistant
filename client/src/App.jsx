import React, { useEffect } from 'react';
import {
  Routes,
  Route,
  useLocation
} from 'react-router-dom';

import './css/style.css';

import './charts/ChartjsConfig';

// Import pages
import Dashboard from './pages/Dashboard';
import AvatarApp from "./pages/AvatarApp";
import QuizApp from "./pages/QuizApp";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Welcome from './pages/Welcome';
import AddBook from './pages/AddBook';


function App() {

  const location = useLocation();

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route exact path="dashboard/Avatar" element={<AvatarApp />} />
        <Route exact path="generate/quiz" element={<QuizApp />} />
        <Route exact path="SignIn" element={<SignIn />} />
        <Route exact path="SignUp" element={<SignUp />} />
        <Route exact path="Welcome" element={<Welcome />} />
        <Route exact path="AddBook" element={<AddBook />} />

      </Routes>
    </>
  );
}

export default App;
