import { createAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
export const register = createAsyncThunk(
  'auth/register',
  async function (
    { first_name, last_name, email, password, password2 },
    { rejectWithValue, dispatch }
  ) {
    try {
      const register = {
        first_name: first_name,
        last_name: last_name,
        email: email,
        password: password,
        password2: password2,
      };

      const response = await axios.post(
        'http://34.172.10.128/api/v1/account/register/',
        register
      );
      console.log(response);

      if (!response.ok) {
        throw new Error("Can't add task. Server error.");
      }

      const data = await response.json();
      dispatch(register(data));
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const login = createAsyncThunk(
  'auth/login',
  async function ({ email, password }, { rejectWithValue, dispatch }) {
    try {
      const login = {
        email: email,
        password: password,
      };

      const response = await axios.post(
        'http://34.172.10.128/api/v1/account/login/',
        login
      );
      console.log(response);
      const data2 = JSON.parse(response.config.data);
      const token = response.data;
      const emailValue = data2.email;
      localStorage.setItem('email', emailValue);
      localStorage.setItem('token', JSON.stringify(token));
      // dispatch(userEmail({ email: emailValue }));

      if (!response.ok) {
        throw new Error("Can't add task. Server error.");
      }

      const data = await response.json();
      dispatch(login(data));
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
const setError = (state, action) => {
  state.status = 'rejected';
  state.error = action.payload;
};

export const setUserEmail = createAction('auth/setUserEmail');

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    //  status: null,
    //  error: null,
  },
  reducers: {
    registerUser(state, action) {},
    loginUser(state, action) {
      state.user = action.payload.email;
      console.log(state.user);
    },
    //  userEmail: (state, action) => {
    //    state.user = action.payload;
    //  },
  },
  extraReducers: builder => {
    // builder.addCase(register, (state, action) => {});
    // builder.addCase(login, (state, action) => {});
    builder.addCase(register.pending);
    builder.addCase(register.rejected);
    builder.addCase(register.fulfilled, (state, action) => {});

    builder.addCase(login.pending);
    builder.addCase(login.rejected);
    builder.addCase(login.fulfilled, (state, action) => {
      state.user = action.payload;
    });
  },
});

const { registerUser } = authSlice.actions;

export default authSlice.reducer;
