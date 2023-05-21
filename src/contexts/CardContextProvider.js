import React, { createContext, useContext, useReducer } from "react";
import axios from "axios";


export const cardContext = createContext();
export const useCard = () => useContext(cardContext);

const INIT_STATE = {
  cards: [],
  oneCash: {}
}

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case "GET_CARDS":
      return {
        ...state,
        cards: action.payload,
      };
      case "GET_ONE_CASH":
      return { ...state, oneCash: action.payload };

    default:
      return state;
  }
}

const API = "https://35.237.122.86:8443";

const CardContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  async function getCards() {
    const token = JSON.parse(localStorage.getItem('token'))

    try {
      const { data } = await axios(`${API}/api/v1/cash-account`, {
        headers: {
          "Authorization": `Bearer ${token}`
        }
      });
      console.log(data);

      dispatch({
        type: 'GET_CARDS',
        payload: data
      })

    } catch (error) {
      console.log(error);
    }
  }

  async function cardPost(cardInfo) {
    try {
      const token = JSON.parse(localStorage.getItem('token'))
      const { data } = await axios.post(`${API}/api/v1/cash-account`, JSON.stringify(cardInfo), {
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json"
        }
      })
      console.log(data);

      getCards()
    } catch (error) {
      console.log(error);
    }
  }

  async function getOneCash(id) {
    try {
      const token = JSON.parse(localStorage.getItem("token"));
      const Authorization = `Bearer ${token}`;
      const config = {
        headers: {
          Authorization,
        },
      };
      const res = await axios(`${API}/api/v1/cash-account/${id}`, config);
      dispatch({
        type: "GET_ONE_CASH",
        payload: res.data,
      });
      console.log(res);
    } catch (e) {
      console.log(e);
      // setError(e);
    }
  }


  async function transfer(fromId, toId, file) {
    try {
      const { data } = await axios.patch(`${API}/api/v1/cash-account/${fromId}/transfer/${toId}`, file, {
        headers: {
          "Authorization": "Bearer ",
          "Content-Type": "application/json"
        }
      });
    } catch (error) {
      console.log(error)
    }
  }
  async function subtract({amount, descrip,accId,accName,category}) {
    try {
      const subt = new FormData()
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
      const res = await axios.patch(
        `https://35.237.122.86:8443/api/v1/card-account/subtract/balance?categoryId=${accId}`,
        subt,config
      );
      // dispatch({
      //   type: "SUBTRACT_BAL",
      //   payload: res.data,
      // });
      console.log(res);
    } catch (error) {
      console.log(error);
      // return rejectWithValue(error);
    }
  // }
  }

  return (
    <cardContext.Provider value={{
      getCards,
      cardPost,
      transfer,
      getOneCash,
      subtract,
      oneCash: state.oneCash,

      cards: state.cards
    }}>
      {children}
    </cardContext.Provider>
  );
};

export default CardContextProvider;