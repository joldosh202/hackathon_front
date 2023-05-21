import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import cardAccountReducer from './CardAccSlice';
import loanReducer from './loanSlice'
import creditReducer from './creditSlice'
export default configureStore({
  reducer: {
    auth: authReducer,
    cardAcc: cardAccountReducer,
    loan: loanReducer,
    credit: creditReducer,
  },
});
