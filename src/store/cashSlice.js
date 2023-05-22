import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { useEffect } from 'react';

export const getCashs = createAsyncThunk(
  'card/getcashs',
  async function (_, { rejectWithValue }) {
    try {
      const token = JSON.parse(localStorage.getItem("token"));
      const Authorization = `Bearer ${token}`;
      const config = {
        headers: {
          Authorization,
        },
      };
      const response = await axios.get(`https://35.237.122.86:8443/api/v1/cash-account`,config);
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

export const getOneCash = createAsyncThunk(
  'card/getonecash',
  async function (id, { rejectWithValue }) {
    try {
      const token = JSON.parse(localStorage.getItem("token"));
      const Authorization = `Bearer ${token}`;
      const config = {
        headers: {
          Authorization,
        },
      };
      const response = await axios.get(`https://35.237.122.86:8443/api/v1/cash-account/${id}`,config);
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

// export const updateBal = createAsyncThunk(
//   'card/updatebal',
//   async function ({id,balance}, { rejectWithValue, dispatch, getState }) {
//     const card = getState().cardAcc.cardacc.find(card => card.id === id);
//     try {
//       const update = new FormData()
//         // update.append('cardId', id)
//         update.append('balance', balance)
//         console.log(update);


//       const token = JSON.parse(localStorage.getItem("token"));
//       const Authorization = `Bearer ${token}`;
//       const config = {
//         headers: {
//           Authorization,
//           // 'Content-Type': 'application/json'
//         },

//       };
//       // const payload = {
//       //   balance: Number(balance), // Assuming 'balance' is a number value
//       // };
//       // const payl = JSON.stringify(payload)
//       // console.log(payl);
//       const response = await axios.patch(
//         `https://35.237.122.86:8443/api/v1/card-account/update/${id}/balance`,
//         update,config
//       );
//       console.log(response);
//       console.log(id);
//       dispatch(updateBalance({ id }));
//     } catch (error) {
//       console.log(error);
//       return rejectWithValue(error);
//     }
//   }
// );

export const subtractCash = createAsyncThunk(
  'cash/subtract',
  async function ({amount, descrip, accId, accName, category,accType,navigate}, { rejectWithValue, dispatch, getState }) {
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
        `https://35.237.122.86:8443/api/v1/cash-account/subtract/balance?categoryId=${accId}`,
        subt,config
      );
      // navigate('cashlist')
      console.log(response);
      // console.log(id);
      dispatch(subtractBalance({ accId }));
    } catch (error) {
      console.log(error);
      return rejectWithValue(error);
    }
  }
);

export const addCashBal = createAsyncThunk(
  'card/add',
  async function ({amount, descrip, accId, accName, category,accType,navigate}, { rejectWithValue, dispatch, getState }) {
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
        `https://35.237.122.86:8443/api/v1/cash-account/add/balance?categoryId=${accId}`,
        subt,config
      );
      // navigate('/cashlist')
      console.log(response);
      // console.log(id);
      dispatch(addCashBalance({ accId }));
    } catch (error) {
      console.log(error);
      return rejectWithValue(error);
    }
  }
);

// export const transfer = createAsyncThunk(
//   'card/transfer',
//   async function ({ fromId, toId, accType, amount}, { rejectWithValue, dispatch, getState }) {
//     // const card = getState().cardAcc.cardacc.find(card => card.id === accId);
//     try {


//       const token = JSON.parse(localStorage.getItem("token"));
//       const Authorization = `Bearer ${token}`;
//       const config = {
//         headers: {
//           Authorization,
//         },
//         params:{
//           accountType: accType,
//           amount: amount
//         }
//       };
    
//       const response = await axios.patch(
//         `https://35.237.122.86:8443/api/v1/card-account/${fromId}/tranfer/${toId}`,
//         {
          
//         },
//        config
//       );
//       console.log(response);
//       // console.log(id);
//       dispatch(transferBal({fromId}));
//     } catch (error) {
//       console.log(error);
//       return rejectWithValue(error);
//     }
//   }
// );


export const addCashAcc = createAsyncThunk(
  'cash/addCashAcc',
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
        'https://35.237.122.86:8443/api/v1/cash-account',
        cardData,
        config
      );
      console.log(response);

      // if (!response.ok) {
      //   throw new Error("Can't add task. Server error.");
      // }
        navigate('/cashlist')
      const data = await response.json()
      dispatch(addCashAccount(data));
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

const cashAccountSlice = createSlice({
  name: 'cash',
  initialState: {
    cashacc: [],
    oneCash:{}
  },
  reducers: {
    addCashAccount(state, action) {
      state.cashacc.push(action.payload);
    },
    updateBalance(state, action) {
      const  updated = state.cashacc.find(
        (card) => card.id === action.payload.id
      )
        // updated = action.payload
    },
    subtractBalance(state, action) {
      const  subt = state.cashacc.find(
        (card) => card.id === action.payload.id
      )
    },
    addCashBalance(state, action) {
      const  subt = state.cashacc.find(
        (card) => card.id === action.payload.id
      )
    },
   //  transferBal(state, action) {
   //    const  transfer = state.cardacc.find(
   //      (card) => card.id === action.payload.id
   //    )
   //  },
  },
  extraReducers: builder => {
    builder.addCase(addCashAcc.pending);
    builder.addCase(addCashAcc.rejected);
    builder.addCase(addCashAcc.fulfilled, (state, action) => {
      state.cashacc= action.payload;
      console.log(state.cardaccounts);
    });
    builder.addCase(getCashs.pending, (state) => {
      console.log('pending cards');
    })
    builder.addCase(getCashs.rejected,(state) => {
      console.log(state.cardacc);
      console.log('error');
    });
    builder.addCase(getCashs.fulfilled, (state, { payload }) => {
      // state.cardacc.push(...payload)
      state.cashacc= [...payload];
      console.log('success');
    });
    builder.addCase(getOneCash.pending, (state) => {
      console.log('pending card');
    })
    builder.addCase(getOneCash.rejected,(state) => {
      console.log(state.oneCard);
      console.log('error');
    });
    builder.addCase(getOneCash.fulfilled, (state, { payload }) => {
      // state.oneCard.push(payload)
      state.oneCash = payload
      console.log('success');
    });

    // builder.addCase(subtract.pending, (state) => {})
    // builder.addCase(subtract.rejected,(state) => {});
    // builder.addCase(subtract.fulfilled, (state, { payload }) => {});

  },
});

const { addCashAccount,updateBalance,subtractBalance,addCashBalance, transferBal } = cashAccountSlice.actions;

export default cashAccountSlice.reducer;
