import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Registration from './components/Registration';

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/registration" element={<Registration />} />
    </Routes>
  );
};

export default MainRoutes;
