import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import './assets/style.scss';
import AOS from 'aos';
import Home from './pages/Home';
import Header from './partials/Header';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';

function App() {
  const location = useLocation();

  useEffect(() => {
    AOS.init({
      once: true,
      duration: 700,
      easing: 'ease',
    });
  });

  useEffect(() => {
    console.log(location.pathname);
  }, [location.pathname]);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/SignIn" element={<SignIn />} />
      </Routes>
    </>
  );
}

export default App;
