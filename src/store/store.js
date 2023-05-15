import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import cardAccountReducer from './CardAccSlice';
export default configureStore({
  reducer: {
    auth: authReducer,
    cardAcc: cardAccountReducer,
  },
});
