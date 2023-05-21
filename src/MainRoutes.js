import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import RegisterRedux from './components/auth/RegisterRedux';
import LoginRedux from './components/auth/LoginRedux';
import Registration from './components/auth/Registration';
import Budget from './components/Budget';
import AddCardAcc from './components/CardAccount/AddCardAcc';
import UpdateBalance from './components/CardAccount/UpdateBalance';
import CreateCardPage from './components/CreateCardPage';
import ProfilePage from './components/ProfilePage';

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<RegisterRedux />} />
      <Route path="/login" element={<LoginRedux />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="/budget" element={<Budget />} />
      <Route path="/addcard" element={<AddCardAcc />} />
      <Route path="/updatebalance" element={<UpdateBalance />} />
      <Route path="/card-create" element={<CreateCardPage />} />
      <Route path="/profile" element={<ProfilePage />} />
    </Routes>
  );
};

export default MainRoutes;
