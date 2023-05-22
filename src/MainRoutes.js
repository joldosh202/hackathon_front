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
import CreateCardPage from './components/CashAccount/CreateCardPage';
import CashAccList from './components/CashAccount/CashAccList';
import OneCash from './components/CashAccount/OneCash';
import LoanList from './components/loan/LoanList';
import AddLoan from './components/loan/AddLoan';
import OneLoan from './components/loan/OneLoan';
import LoanRepay from './components/loan/LoanRepay';
import LoanIncrease from './components/loan/LoanIncrease';
import CreditList from './components/Credit/CreditList';
import AddCredit from './components/Credit/AddCredit';
import OneCredit from './components/Credit/OneCredit';
import CreditRepay from './components/Credit/CreditRepay';
import SubtractCash from './components/CashAccount/SubtractCash';
import AddCashBal from './components/CashAccount/AddCashBal';
import ProfilePage from './components/ProfilePage';
import CardLimit from './components/CardAccount/CardLimit';
import CashLimit from './components/CashAccount/CashLimit';

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

      <Route path="/updatebalance" element={<UpdateBalance />} />
      <Route path="/onecash/:id" element={<OneCash />} />
      <Route path="/oneloan/:id" element={<OneLoan />} />
      
      <Route path="/card-create" element={<CreateCardPage />} />
      <Route path="/cashlist" element={<CashAccList />} />
      <Route path="/loanlist" element={<LoanList />} />
      <Route path="/addloan" element={<AddLoan />} />
      <Route path="/repayloan/:id" element={<LoanRepay />} />
      <Route path="/repaycredit/:id" element={<CreditRepay />} />
      <Route path="/incloan/:id" element={<LoanIncrease />} />
      <Route path="/creditlist" element={<CreditList />} />
      <Route path="/addcredit" element={<AddCredit />} />
      <Route path="/onecredit/:id" element={<OneCredit />} />
      <Route path="/subtractcash/:id" element={<SubtractCash />} />
      <Route path="/addcashbal/:id" element={<AddCashBal />} />
      <Route path="/cardlimit/:id" element={<CardLimit />} />
      <Route path="/cashlimit/:id" element={<CashLimit />} />
      <Route path="/profile" element={<ProfilePage />} />
    </Routes>
  );
};

export default MainRoutes;
