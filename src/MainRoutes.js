import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import RegisterRedux from './components/RegisterRedux';
import LoginRedux from './components/LoginRedux';

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<RegisterRedux />} />
      <Route path="/loginrtk" element={<LoginRedux />} />
    </Routes>
  );
};

export default MainRoutes;
