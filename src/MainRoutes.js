import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import RegisterRedux from './components/auth/RegisterRedux';
import LoginRedux from './components/auth/LoginRedux';
import Registration from './components/auth/Registration';
import Budget from './components/Budget';
import AddCardAcc from './components/CardAccount/AddCardAcc';
import UpdateBalance from './components/CardAccount/UpdateBalance';
import CardAccList from './components/CardAccount/CardAccList';
import VerifyEmail from './components/auth/VerifyEmail';
import OneCard from './components/CardAccount/OneCard';
import SubtractCard from './components/CardAccount/SubtractCard';
import AddBal from './components/CardAccount/AddBal';
import Transfer from './components/CardAccount/Transfer';

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<RegisterRedux />} />
      <Route path="/login" element={<LoginRedux />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="/budget" element={<Budget />} />
      <Route path="/addcard" element={<AddCardAcc />} />
      <Route path="/updatebalance/:id" element={<UpdateBalance />} />
      <Route path="/onecard/:id" element={<OneCard />} />
      <Route path="/cardlist" element={<CardAccList />} />
      <Route path="/verify" element={<VerifyEmail />} />
      <Route path="/subtractcard/:id" element={<SubtractCard />} />
      <Route path="/addcardbal/:id" element={<AddBal />} />
      <Route path="/transfercard/:id" element={<Transfer />} />

    </Routes>
  );
};

export default MainRoutes;
