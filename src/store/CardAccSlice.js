import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getCards = createAsyncThunk(
  'cardAcc/getCards',
  async function (_, { rejectWithValue }) {
    try {
      const response = await axios('http://34.172.10.128/api/v1/card-account');
      if (!response.ok) {
        throw new Error('Server Error');
      }

      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
// export const deleteTodo = createAsyncThunk(
//   'todos/deleteTodo',
//   async function (id, { rejectWithValue, dispatch }) {
//     try {
//       const response = await fetch(
//         `https://jsonplaceholder.typicode.com/todos/${id}`,
//         {
//           method: 'DELETE',
//         }
//       );
//       if (!response.ok) {
//         throw new Error("Can't delete task. Server error");
//       }
//       dispatch(removeTodo({ id }));
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );
// export const toggleStatus = createAsyncThunk(
//   'todos/toggleStatus',
//   async function (id, { rejectWithValue, dispatch, getState }) {
//     const todo = getState().todos.todos.find(todo => todo.id === id);
//     try {
//       const response = await fetch(
//         `https://jsonplaceholder.typicode.com/todos/${id}`,
//         {
//           method: 'PATCH',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({
//             completed: !todo.completed,
//           }),
//         }
//       );
//       if (!response.ok) {
//         throw new Error("Can't toggle status. Server error");
//       }
//       dispatch(toggleTodoComplete({ id }));
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );
export const addCardAcc = createAsyncThunk(
  'cardAcc/addCardAcc',
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
      cardType,
      cvv,
    },
    { rejectWithValue, dispatch }
  ) {
    try {
      const card = {
        name: name,
        balance: balance,
        currency: currency,
        color: color,
        icon: icon,
        cardHolderName: cardHolderName,
        bankName: bankName,
        cardNumber: cardNumber,
        cardType: cardType,
        cvv: cvv,
      };

      const response = await axios.post(
        'http://35.237.122.86/api/v1/card-account',
        card
      );
      console.log(response);

      if (!response.ok) {
        throw new Error("Can't add task. Server error.");
      }

      const data = await response.json();
      dispatch(addCardAcc(data));
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
const setError = (state, action) => {
  state.status = 'rejected';
  state.error = action.payload;
};

const cardAccountSlice = createSlice({
  name: 'cardAcc',
  initialState: {
    cardAccounts: [],
    status: null,
    error: null,
  },
  reducers: {
    addCardAcc(state, action) {
      state.cardAccounts.push(action.payload);
    },
    // removeCardAcc(state, action) {
    //   state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
    // },
    // toggleTodoComplete(state, action) {
    //   const toggledTodo = state.todos.find(
    //     (todo) => todo.id === action.payload.id
    //   );
    //   toggledTodo.completed = !toggledTodo.completed;
    // },
  },
  extraReducers: builder => {
    builder.addCase(addCardAcc.pending);
    builder.addCase(addCardAcc.rejected);
    builder.addCase(addCardAcc.fulfilled, (state, action) => {
      state.cardAccounts = action.payload;
    });

    // builder.addCase(login.pending);
    // builder.addCase(login.rejected);
    // builder.addCase(login.fulfilled, (state, action) => {
    //   state.user = action.payload;
    // });
  },
});

const { addCardAccount } = cardAccountSlice.actions;

export default cardAccountSlice.reducer;
