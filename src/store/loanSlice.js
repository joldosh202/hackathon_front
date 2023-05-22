import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getLoans = createAsyncThunk(
   'loan/getloans',
   async function (_, { rejectWithValue }) {
     try {
       const token = JSON.parse(localStorage.getItem("token"));
       const Authorization = `Bearer ${token}`;
       const config = {
         headers: {
           Authorization,
         },
       };
       const response = await axios.get(`https://35.237.122.86:8443/api/v1/loan`,config);
       // if (!response) {
       //   throw new Error('Server Error');
       // }
       console.log(response.data);
 
       const data = await response.data
       return data;
 
     } catch (error) {
       console.log(error);
       return rejectWithValue(error);
     }
   }
 );
 
 export const getOneLoan = createAsyncThunk(
   'loan/getoneloan',
   async function (id, { rejectWithValue }) {
     try {
       const token = JSON.parse(localStorage.getItem("token"));
       const Authorization = `Bearer ${token}`;
       const config = {
         headers: {
           Authorization,
         },
       };
       const response = await axios.get(`https://35.237.122.86:8443/api/v1/loan/${id}`,config);
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
 
 export const repayloan = createAsyncThunk(
   'loan/repayloan',
   async function ({id,amount,descrip, accId,accName,accType}, { rejectWithValue, dispatch, getState }) {
     const loan = getState().cardAcc.cardacc.find(card => card.id === id);
     try {
       const update = new FormData()
         // update.append('cardId', id)
         update.append('amount', amount)
         update.append('description', descrip)
         update.append('accountId', accId)
         update.append('accountName', accName)
         update.append('accountType', accType)
         console.log(update);
 
 
       const token = JSON.parse(localStorage.getItem("token"));
       const Authorization = `Bearer ${token}`;
       const config = {
         headers: {
           Authorization,
           'Content-Type': 'application/json'
         },
 
       };
       const response = await axios.post(
         `https://35.237.122.86:8443/api/v1/loan/${accId}/repay`,
         update,config
       );
       console.log(response);
       console.log(id);
       dispatch(repay({ id }));
     } catch (error) {
       console.log(error);
       return rejectWithValue(error);
     }
   }
 );
 
 export const increaseloan = createAsyncThunk(
   'loan/increase',
   async function ({loanId,amount,name,indebtedness,currency,navigate,}, { rejectWithValue, dispatch, getState }) {
     const loan = getState().loanAcc.loanacc.find(card => card.id === loanId);
     try {
       const loanData = new FormData()
       // subt.append('id', accId)
       loanData.append('name', name)
 
       loanData.append('indebtedness', indebtedness)
       loanData.append('currency', currency)
       // subt.append('accountType', accType)
       // subt.append('categoryId', accId)
 
         console.log(loanData);
 console.log(loanId);
 
       const token = JSON.parse(localStorage.getItem("token"));
       const Authorization = `Bearer ${token}`;
       const config = {
         headers: {
           Authorization,
           'Content-Type': 'application/json',
           params: {
            amount: amount
           }
         },
       };
       const response = await axios.patch(
         `https://35.237.122.86:8443/api/v1/loan/${loanId}/increase-loan`,
         loanData,
         {},
         config
       );
       console.log(response);
       // console.log(id);
      //  dispatch(subtractBalance({ accId }));
     } catch (error) {
       console.log(error);
       return rejectWithValue(error);
     }
   }
 );
 
 
 export const loanActivity = createAsyncThunk(
   'loan/activity',
   async function ( {id,condition}, { rejectWithValue, dispatch, getState }) {
     // const card = getState().cardAcc.cardacc.find(card => card.id === accId);
     try {
 
 
       const token = JSON.parse(localStorage.getItem("token"));
       const Authorization = `Bearer ${token}`;
       const config = {
         headers: {
           Authorization,
         },
         params:{
           condition: condition,
         }
       };
       console.log(condition);
     
       const response = await axios.patch(
         `https://35.237.122.86:8443/api/v1/loan/${id}/activity`,
         {
           
         },
        config
       );
       console.log(response);
       // console.log(id);
       dispatch(activity({id}));
     } catch (error) {
       console.log(error);
       return rejectWithValue(error);
     }
   }
 );
;
 export const createLoan = createAsyncThunk(
   'loan/addloan',
   async function (
     {
       name,
       indebtedness,
       currency,
       
       navigate,
     },
     { rejectWithValue, dispatch }
   ) {
     try {
       
       
       const loanData = new FormData()
       loanData.append('name', name)
 
       loanData.append('indebtedness', indebtedness)
       loanData.append('currency', currency)
      const test = {
        name: name,
        indebtedness: indebtedness,
        currency: currency,
      }
 console.log(test);
       console.log(loanData);
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
         'https://35.237.122.86:8443/api/v1/loan',
         loanData,
         
         config
       );
       console.log(response);
 
       // if (!response.ok) {
       //   throw new Error("Can't add task. Server error.");
       // }
         navigate('/cashlist')
       const data = await response.json()
       dispatch(addLoan(data));
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
 
 const loanSlice = createSlice({
   name: 'loan',
   initialState: {
     loans: [],
     oneLoan:{}
   },
   reducers: {
     addLoan(state, action) {
       state.loans.push(action.payload);
     },
     repay(state, action) {
       const  updated = state.loans.find(
         (card) => card.id === action.payload.id
       )
         // updated = action.payload
     },
     increase(state, action) {
       const  subt = state.loans.find(
         (card) => card.id === action.payload.id
       )
     },
     activity(state, action) {
       const  subt = state.loans.find(
         (card) => card.id === action.payload.id
       )
     },
   //   transferBal(state, action) {
   //     const  transfer = state.loans.find(
   //       (card) => card.id === action.payload.id
   //     )
   //   },
   },
   extraReducers: builder => {
     builder.addCase(createLoan.pending);
     builder.addCase(createLoan.rejected) 
     builder.addCase(createLoan.fulfilled, (state, action) => {
       state.loans = action.payload;
       console.log(state.cardaccounts);
     });
     builder.addCase(getLoans.pending, (state) => {
       console.log('pending cards');
     })
     builder.addCase(getLoans.rejected,(state) => {
       console.log(state.loans);
       console.log('error');
     });
     builder.addCase(getLoans.fulfilled, (state, { payload }) => {
       // state.cardacc.push(...payload)
       state.loans = [...payload];
       console.log('success');
     });
     builder.addCase(getOneLoan.pending, (state) => {
       console.log('pending card');
     })
     builder.addCase(getOneLoan.rejected,(state) => {
       console.log(state.oneLoan);
       console.log('error');
     });
     builder.addCase(getOneLoan.fulfilled, (state, { payload }) => {
       // state.oneCard.push(payload)
       state.oneLoan = payload
       console.log('success');
     });
     builder.addCase(loanActivity.pending, (state) => {
      console.log('activity pending');
    })
    builder.addCase(loanActivity.rejected,(state) => {
      console.log(state.oneLoan);
      console.log('error');
    });
    builder.addCase(loanActivity.fulfilled, (state, { payload }) => {
      // state.oneCard.push(payload)
      state.oneLoan = payload
      console.log('success');
    });
 
     // builder.addCase(subtract.pending, (state) => {})
     // builder.addCase(subtract.rejected,(state) => {});
     // builder.addCase(subtract.fulfilled, (state, { payload }) => {});
 
   },
 });
 
 const { addLoan,repay,increase,activity } = loanSlice.actions;
 
 export default loanSlice.reducer;
 