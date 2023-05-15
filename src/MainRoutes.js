import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import RegisterRedux from './components/RegisterRedux';
import LoginRedux from './components/LoginRedux';
import Registration from './components/Registration';
import Budget from './components/Budget';
import AddCardAcc from './components/CardAccount/AddCardAcc';
import UpdateBalance from './components/CardAccount/UpdateBalance';

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<RegisterRedux />} />
      <Route path="/loginrtk" element={<LoginRedux />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="/budget" element={<Budget />} />
      <Route path="/addcard" element={<AddCardAcc />} />
      <Route path="/updatebalance" element={<UpdateBalance />} />
    </Routes>
  );
};

export default MainRoutes;
