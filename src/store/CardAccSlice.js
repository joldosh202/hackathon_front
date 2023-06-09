import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { useEffect } from 'react';

export const getCards = createAsyncThunk(
  'card/getcards',
  async function (_, { rejectWithValue }) {
    try {
      const token = JSON.parse(localStorage.getItem("token"));
      const Authorization = `Bearer ${token}`;
      const config = {
        headers: {
          Authorization,
        },
      };
      const response = await axios.get(`https://35.237.122.86:8443/api/v1/card-account`,config);
      // if (!response) {
      //   throw new Error('Server Error');
      // }
      console.log(response);

      const data = await response.data
      return data;

    } catch (error) {
      console.log(error);
      return rejectWithValue(error);
    }
  }
);

export const getOneCard = createAsyncThunk(
  'card/getonecard',
  async function (id, { rejectWithValue }) {
    try {
      const token = JSON.parse(localStorage.getItem("token"));
      const Authorization = `Bearer ${token}`;
      const config = {
        headers: {
          Authorization,
        },
      };
      const response = await axios.get(`https://35.237.122.86:8443/api/v1/card-account/${id}`,config);
      // if (!response) {
      //   throw new Error('Server Error');
      // }
      console.log(response);

      const data = await response
      return data;

    } catch (error) {
      console.log(error);
      return rejectWithValue(error);
    }
  }
);

export const updateBal = createAsyncThunk(
  'card/updatebal',
  async function ({id,balance}, { rejectWithValue, dispatch, getState }) {
    const card = getState().cardAcc.cardacc.find(card => card.id === id);
    try {
      const update = new FormData()
        // update.append('cardId', id)
        update.append('balance', balance)
        console.log(update);


      const token = JSON.parse(localStorage.getItem("token"));
      const Authorization = `Bearer ${token}`;
      const config = {
        headers: {
          Authorization,
          // 'Content-Type': 'application/json'
        },

      };
      // const payload = {
      //   balance: Number(balance), // Assuming 'balance' is a number value
      // };
      // const payl = JSON.stringify(payload)
      // console.log(payl);
      const response = await axios.patch(
        `https://35.237.122.86:8443/api/v1/card-account/update/${id}/balance`,
        update,config
      );
      console.log(response);
      console.log(id);
      dispatch(updateBalance({ id }));
    } catch (error) {
      console.log(error);
      return rejectWithValue(error);
    }
  }
);

export const subtract = createAsyncThunk(
  'card/subract',
  async function ({amount, descrip, accId, accName, category,accType, navigate}, { rejectWithValue, dispatch, getState }) {
    const card = getState().cardAcc.cardacc.find(card => card.id === accId);
    try {
      const subt = new FormData()
      // subt.append('id', accId)
      subt.append('amount', amount)
      subt.append('description', descrip)
      subt.append('accountId', accId)
      subt.append('accountName', accName)
      subt.append('categoryId', category)
      // subt.append('accountType', accType)
      // subt.append('categoryId', accId)

        console.log(subt);
console.log(accId);

      const token = JSON.parse(localStorage.getItem("token"));
      const Authorization = `Bearer ${token}`;
      const config = {
        headers: {
          Authorization,
          'Content-Type': 'application/json'
        },
      };
      const response = await axios.patch(
        `https://35.237.122.86:8443/api/v1/card-account/subtract/balance?categoryId=${accId}`,
        subt,config
      );
      // navigate('/cashlist')
      console.log(response);
      // console.log(id);
      dispatch(subtractBalance({ accId }));
    } catch (error) {
      console.log(error);
      return rejectWithValue(error);
    }
  }
);

export const addBalance = createAsyncThunk(
  'card/add',
  async function ({amount, descrip, accId, accName, category,accType, navigate}, { rejectWithValue, dispatch, getState }) {
    const card = getState().cardAcc.cardacc.find(card => card.id === accId);
    try {
      const subt = new FormData()
      // subt.append('id', accId)
      subt.append('amount', amount)
      subt.append('description', descrip)
      subt.append('accountId', accId)
      subt.append('accountName', accName)
      subt.append('categoryId', category)
      // subt.append('accountType', accType)
      // subt.append('categoryId', accId)

        console.log(subt);
console.log(accId);

      const token = JSON.parse(localStorage.getItem("token"));
      const Authorization = `Bearer ${token}`;
      const config = {
        headers: {
          Authorization,
          'Content-Type': 'application/json'
        },
      };
      const response = await axios.patch(
        `https://35.237.122.86:8443/api/v1/card-account/add/balance?categoryId=${accId}`,
        subt,config
      );
      console.log(response);
      // navigate('/cashlist')
      // console.log(id);
      dispatch(addCardBalance({ accId }));
    } catch (error) {
      console.log(error);
      return rejectWithValue(error);
    }
  }
);

export const transfer = createAsyncThunk(
  'card/transfer',
  async function ({ fromId, toId, accType, amount}, { rejectWithValue, dispatch, getState }) {
    // const card = getState().cardAcc.cardacc.find(card => card.id === accId);
    try {


      const token = JSON.parse(localStorage.getItem("token"));
      const Authorization = `Bearer ${token}`;
      const config = {
        headers: {
          Authorization,
          'Content-Type': 'application/json'

        },
        params:{
          accountType: accType,
          amount: amount
        }
      };
    
      const response = await axios.patch(
        `https://35.237.122.86:8443/api/v1/card-account/${fromId}/tranfer/${toId}`,
        {},
       config
      );
      console.log(response);
      // console.log(id);
      dispatch(transferBal({fromId}));
    } catch (error) {
      console.log(error);
      return rejectWithValue(error);
    }
  }
);

export const limit = createAsyncThunk(
  'card/limit',
  async function ({ id, limit2}, { rejectWithValue, dispatch, getState }) {
    // const card = getState().cardAcc.cardacc.find(card => card.id === accId);
    try {


      const token = JSON.parse(localStorage.getItem("token"));
      const Authorization = `Bearer ${token}`;
      const config = {
        headers: {
          Authorization,
        },
        params: {
          limit: limit2
        }
      };
      const params = {

      }
    
      const response = await axios.patch(
        `https://35.237.122.86:8443/api/v1/card-account/${id}/limit`,
        {},
       config
      );
      console.log(response);
      // console.log(id);
      dispatch(limitCard({id}));
    } catch (error) {
      console.log(error);
      return rejectWithValue(error);
    }
  }
);


export const addCardAcc = createAsyncThunk(
  'card/addCardAcc',
  async function (
    {
      name,
      balance,
      currency,
      color,
      icon,
      cardHolderName,
      bankName,
      cardNumber,
      paymentSystem,
      cvv,
      navigate,
    },
    { rejectWithValue, dispatch }
  ) {
    try {
      
      
      const cardData = new FormData()
      cardData.append('name', name)

      cardData.append('balance', balance)
      cardData.append('currency', currency)
      cardData.append('color', color)
      cardData.append('icon', icon)

      cardData.append('paymentSystem', paymentSystem)
      console.log(cardData);
      const token = JSON.parse(localStorage.getItem("token"));
      const Authorization = `Bearer ${token}`;
      const config = {
        headers: {
          Authorization,
          'Content-Type': 'application/json'
        },

      };
      console.log(config);
      const response = await axios.post(
        'https://35.237.122.86:8443/api/v1/card-account',
        cardData,
        config
      );
      console.log(response);

      // if (!response.ok) {
      //   throw new Error("Can't add task. Server error.");
      // }
        navigate('/cashlist')
      const data = await response.json()
      dispatch(addCardAccount(data));
      // dispatch(addCardAcc(response.data));
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
const setError = (state, action) => {
  state.status = 'rejected';
  state.error = action.payload;
};

const cardAccountSlice = createSlice({
  name: 'card',
  initialState: {
    cardacc: [],
    oneCard:{}
  },
  reducers: {
    addCardAccount(state, action) {
      state.cardacc.push(action.payload);
    },
    updateBalance(state, action) {
      const  updated = state.cardacc.find(
        (card) => card.id === action.payload.id
      )
        // updated = action.payload
    },
    subtractBalance(state, action) {
      const  subt = state.cardacc.find(
        (card) => card.id === action.payload.id
      )
    },

    addCardBalance(state, action) {
      const  subt = state.cardacc.find(
        (card) => card.id === action.payload.id
      )
    },
    limitCard(state, action) {
      const  subt = state.cardacc.find(
        (card) => card.id === action.payload.id
      )
    },
    transferBal(state, action) {
      const  transfer = state.cardacc.find(
        (card) => card.id === action.payload.id
      )
    },
  },
  extraReducers: builder => {
    builder.addCase(addCardAcc.pending);
    builder.addCase(addCardAcc.rejected);
    builder.addCase(addCardAcc.fulfilled, (state, action) => {
      state.cardacc = action.payload;
      console.log(state.cardaccounts);
    });
    builder.addCase(getCards.pending, (state) => {
      console.log('pending cards');
    })
    builder.addCase(getCards.rejected,(state) => {
      console.log(state.cardacc);
      console.log('error');
    });
    builder.addCase(getCards.fulfilled, (state, { payload }) => {
      // state.cardacc.push(...payload)
      state.cardacc = [...payload];
      console.log('success');
    });
    builder.addCase(getOneCard.pending, (state) => {
      console.log('pending card');
    })
    builder.addCase(getOneCard.rejected,(state) => {
      console.log(state.oneCard);
      console.log('error');
    });
    builder.addCase(getOneCard.fulfilled, (state, { payload }) => {
      // state.oneCard.push(payload)
      state.oneCard = payload
      console.log('success');
    });

    builder.addCase(limit.pending, (state) => {})
    builder.addCase(limit.rejected,(state) => {});
    builder.addCase(limit.fulfilled, (state, { payload }) => {});

  },
});

const { addCardAccount,updateBalance,subtractBalance,addCardBalance, transferBal,limitCard } = cardAccountSlice.actions;

export default cardAccountSlice.reducer;
