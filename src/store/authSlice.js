import { createAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
export const register = createAsyncThunk(
  'auth/register',
  async function (
    { first_name, last_name, email, password,navigate },
    { rejectWithValue, dispatch }
  ) {
    try {
      const register = new FormData;

      register.append("firstname", first_name);
      register.append("lastname", last_name);
      register.append("email", email);
      register.append("password", password);

      const response = await axios.post(
        'https://35.237.122.86:8443/api/v1/auth/register',
        register,
        {
          headers: {
            'content-type': 'multipart/form-data'
          }
        }
      );
      // console.log(response.data);
      console.log(response);

      // if (!response.ok) {
      //   throw new Error("Can't add task. Server error.");
      // }
      navigate('/verify ')

      const data = await response.json();
      dispatch(register(data));
    } catch (error) {
      console.log(error)
      return rejectWithValue(error.message);
    }
  }
);
export const login = createAsyncThunk(
  'auth/login',
  async function ({ email, password,navigate }, { rejectWithValue, dispatch }) {
    try {
      const loginData = new FormData();
      loginData.append("email", email);
      loginData.append("password", password);
      console.log(email);
      const jsonlogin = JSON.stringify(loginData)

      console.log(loginData);

      const response = await axios.post(
        'https://35.237.122.86:8443/api/v1/auth/authenticate',
          loginData,
          {
            headers: {
              'Content-Type': 'application/json'
            }
          }
      );

      console.log(response);
      const data2 = JSON.parse(response.config.data);
      const token = response.data.token;
      const emailValue = data2.email;
      
      localStorage.setItem("token", JSON.stringify(token));
      localStorage.setItem("username", emailValue);
      
      // if (!response.ok) {
        //   throw new Error("Can't add task. Server error.");
        // }
        navigate("/")
        const data = await response.json();
        dispatch(login(data));
    } catch (error) {
      console.log(error);
      return rejectWithValue(error);
    }
  }
);

export const verifyEmail = createAsyncThunk(
  'auth/verify',
  async function ( {tokenr, navigate}, { rejectWithValue, dispatch }) {
    try {
      
      // const token = new FormData;

      // token.append("token", token);
      // const token1 = token
      
// const tokenjson = JSON.stringify(token)
// const bearer = `Bearer ${token1}`
      const response = await axios.get(
        `https://35.237.122.86:8443/api/v1/auth/verify-email?`,
        {
          params: {
            token: tokenr,
          },
        }
      );

      console.log(response);
        navigate('/login')
      const data = await response
      console.log(data);
      dispatch(verifyEmail(data));
      
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const logout = createAsyncThunk(
  'auth/logout',
  async function ( navigate, { rejectWithValue, dispatch }) {
    try {
      
// const tokenjson = JSON.stringify(token)
// const bearer = `Bearer ${token1}`
localStorage.removeItem("token");
    localStorage.removeItem("username");
        navigate('/login')
      dispatch(logout());
      
    } catch (error) {
      return rejectWithValue(error);
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
  },
  reducers: {
    registerUser(state, action) { },
    loginUser(state, action) {
      state.user = action.payload.email;
      console.log(state.user);
    },
    verifyUserEmail(state, action) {
    },
    authAgainUser(state, action) {
    },
    logout(state, action) {
    },
  },
  extraReducers: builder => {
    builder.addCase(register.pending);
    builder.addCase(register.rejected);
    builder.addCase(register.fulfilled, (state, action) => { });

    builder.addCase(login.pending);
    builder.addCase(login.rejected, (state,action) => {
      // console.log(action.payload);
    })
    builder.addCase(login.fulfilled, (state, action) => {
        // useNavigate("/")
        // const navigate = useNavigate()
        // navigate("/", { replace: true })

    });
    builder.addCase(verifyEmail.pending);
    builder.addCase(verifyEmail.rejected);
    builder.addCase(verifyEmail.fulfilled, (state, action) => {});
    
  },
});

const { registerUser } = authSlice.actions;

export default authSlice.reducer;
