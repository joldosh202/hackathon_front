import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getCredits = createAsyncThunk(
   'credit/getcredits',
   async function (_, { rejectWithValue }) {
     try {
       const token = JSON.parse(localStorage.getItem("token"));
       const Authorization = `Bearer ${token}`;
       const config = {
         headers: {
           Authorization,
         },
       };
       const response = await axios.get(`https://35.237.122.86:8443/api/v1/credit`,config);
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
 
 export const getOneCredit = createAsyncThunk(
   'credit/getonecredit',
   async function (id, { rejectWithValue }) {
     try {
       const token = JSON.parse(localStorage.getItem("token"));
       const Authorization = `Bearer ${token}`;
       const config = {
         headers: {
           Authorization,
         },
       };
       const response = await axios.get(`https://35.237.122.86:8443/api/v1/credit/${id}`,config);
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
 
 export const repaycredit = createAsyncThunk(
   'credit/repaycredit',
   async function ({id,amount,descrip, accId,accName,accType}, { rejectWithValue, dispatch, getState }) {
     const credit = getState().cardAcc.cardacc.find(card => card.id === id);
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
         `https://35.237.122.86:8443/api/v1/credit/${accId}/repay`,
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
 
//  export const increaseloan = createAsyncThunk(
//    'loan/increase',
//    async function ({loanId,amount,name,indebtedness,currency,navigate,}, { rejectWithValue, dispatch, getState }) {
//      const loan = getState().loanAcc.loanacc.find(card => card.id === loanId);
//      try {
//        const loanData = new FormData()
//        // subt.append('id', accId)
//        loanData.append('name', name)
 
//        loanData.append('indebtedness', indebtedness)
//        loanData.append('currency', currency)
//        // subt.append('accountType', accType)
//        // subt.append('categoryId', accId)
 
//          console.log(loanData);
//  console.log(loanId);
 
//        const token = JSON.parse(localStorage.getItem("token"));
//        const Authorization = `Bearer ${token}`;
//        const config = {
//          headers: {
//            Authorization,
//            'Content-Type': 'application/json',
//            params: {
//             amount: amount
//            }
//          },
//        };
//        const response = await axios.patch(
//          `https://35.237.122.86:8443/api/v1/loan/${loanId}/increase-loan`,
//          loanData,
//          {},
//          config
//        );
//        console.log(response);
//        // console.log(id);
//       //  dispatch(subtractBalance({ accId }));
//      } catch (error) {
//        console.log(error);
//        return rejectWithValue(error);
//      }
//    }
//  );
 
 
 export const creditActivity = createAsyncThunk(
   'credit/activity',
   async function ( {id,status}, { rejectWithValue, dispatch, getState }) {
     // const card = getState().cardAcc.cardacc.find(card => card.id === accId);
     try {
 
 
       const token = JSON.parse(localStorage.getItem("token"));
       const Authorization = `Bearer ${token}`;
       const config = {
         headers: {
           Authorization,
         },
         params:{
           status: status,
         }
       };
       console.log(status);
     
       const response = await axios.patch(
         `https://35.237.122.86:8443/api/v1/credit/${id}/activity`,
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
 export const createCredit = createAsyncThunk(
   'credit/addcredit',
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
       
       
       const creditData = new FormData()
       creditData.append('name', name)
 
       creditData.append('indebtedness', indebtedness)
       creditData.append('currency', currency)
      const test = {
        name: name,
        indebtedness: indebtedness,
        currency: currency,
      }
 console.log(test);
       console.log(creditData);
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
         'https://35.237.122.86:8443/api/v1/credit',
         creditData,
         
         config
       );
       console.log(response);
 
       // if (!response.ok) {
       //   throw new Error("Can't add task. Server error.");
       // }
         navigate('/cashlist')
       const data = await response.json()
       dispatch(addCredit(data));
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
 
 const creditSlice = createSlice({
   name: 'credit',
   initialState: {
     credits: [],
     oneCredit:{}
   },
   reducers: {
     addCredit(state, action) {
       state.credits.push(action.payload);
     },
     repay(state, action) {
       const  updated = state.credits.find(
         (card) => card.id === action.payload.id
       )
         // updated = action.payload
     },
     increase(state, action) {
       const  subt = state.credits.find(
         (card) => card.id === action.payload.id
       )
     },
     activity(state, action) {
       const  subt = state.credits.find(
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
     builder.addCase(createCredit.pending);
     builder.addCase(createCredit.rejected) 
     builder.addCase(createCredit.fulfilled, (state, action) => {
       state.credits = action.payload;
       console.log(state.cardaccounts);
     });
     builder.addCase(getCredits.pending, (state) => {
       console.log('pending cards');
     })
     builder.addCase(getCredits.rejected,(state) => {
       console.log(state.credits);
       console.log('error');
     });
     builder.addCase(getCredits.fulfilled, (state, { payload }) => {
       // state.cardacc.push(...payload)
       state.credits = [...payload];
       console.log('success');
     });
     builder.addCase(getOneCredit.pending, (state) => {
       console.log('pending card');
     })
     builder.addCase(getOneCredit.rejected,(state) => {
       console.log(state.oneCredit);
       console.log('error');
     });
     builder.addCase(getOneCredit.fulfilled, (state, { payload }) => {
       // state.oneCard.push(payload)
       state.oneCredit = payload
       console.log('success');
     });
     builder.addCase(creditActivity.pending, (state) => {
      console.log('activity pending');
    })
    builder.addCase(creditActivity.rejected,(state) => {
      console.log(state.oneCredit);
      console.log('error');
    });
    builder.addCase(creditActivity.fulfilled, (state, { payload }) => {
      // state.oneCard.push(payload)
      state.oneCredit = payload
      console.log('success');
    });
 
     // builder.addCase(subtract.pending, (state) => {})
     // builder.addCase(subtract.rejected,(state) => {});
     // builder.addCase(subtract.fulfilled, (state, { payload }) => {});
 
   },
 });
 
 const { addCredit,repay,increase,activity } = creditSlice.actions;
 
 export default creditSlice.reducer;
 