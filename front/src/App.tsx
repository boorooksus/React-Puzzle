import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import './assets/style.scss';
import AOS from 'aos';
import Home from './pages/Home';
import Header from './partials/Header';

function App() {
  const location = useLocation();

  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 700,
      easing: 'ease-out-cubic',
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
      </Routes>
    </>
  );
}

export default App;
