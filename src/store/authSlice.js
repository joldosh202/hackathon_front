import { createAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { useEffect } from 'react';
export const register = createAsyncThunk(
  'auth/register',
  async function (
    { first_name, last_name, email, password, },
    { rejectWithValue, dispatch }
  ) {
    try {
      const register = new FormData;

      register.append("firstname", first_name);
      register.append("lastname", last_name);
      register.append("email", email);
      register.append("password", password);

      const response = await axios.post(
        'http://35.237.122.86:8080/api/v1/auth/register',
        register,
        // {
        //   headers: {
        //     'content-type': 'multipart/form-data'
        //   }
        // }
      );
      // console.log(response.data);
      console.log(response);

      if (!response.ok) {
        throw new Error("Can't add task. Server error.");
      }

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
  async function ({ email, password }, { rejectWithValue, dispatch }) {
    try {
      const loginData = new FormData();
      loginData.append("email", email);
      loginData.append("password", password);


      // const jsonlogin = JSON.stringify(loginData)
      console.log(loginData);

      const response = await axios.post(
        'http://35.237.122.86:8080/api/v1/auth/authenticate',
          loginData,
      );
      
      console.log(response);
      const data2 = JSON.parse(response.config.data);
      const token = response.data;
      const emailValue = data2.email;

      if (!response.ok) {
        throw new Error("Can't add task. Server error.");
      }

      const data = await response.json();
      dispatch(login(data));
    } catch (error) {
      console.log(error);
      return rejectWithValue(error);
    }
  }
);

// export const verifyEmail = createAsyncThunk(
//   'auth/verify',
//   async function ( token, { rejectWithValue, dispatch }) {
//     try {
//       // const token = new FormData;

//       // token.append("token", token);
//       const token1 = token
      
// const tokenjson = JSON.stringify(token)
// const bearer = `Bearer ${token1}`
//       const response = await axios.get(
//         'http://35.237.122.86:8080/api/v1/auth/verify-email',
//         tokenjson
//       );
//       console.log(response);
//       // localStorage.setItem('token', JSON.stringify(token));

//       if (!response.ok) {
//         throw new Error("Can't add task. Server error.");
//       }

//       const data = await response.json();
//       dispatch(verifyEmail(data));
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );

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
    });
  },
});

const { registerUser } = authSlice.actions;

export default authSlice.reducer;
