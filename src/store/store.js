import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import { PersistConfig, persistReducer } from 'redux-persist';

export default configureStore({
  reducer: {
    auth: authReducer,
  },
});
