import React, { createContext, useContext, useReducer } from "react";
import axios from "axios";


export const cardContext = createContext();
export const useCard = () => useContext(cardContext);

const INIT_STATE = {
  cards: [],
}

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case "GET_CARDS":
      return {
        ...state,
        cards: action.payload,
      };
    default:
      return state;
  }
}

const API = "http://35.237.122.86:8080";

const CardContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  async function getCards() {
    try {
      const { data } = await axios(`${API}/api/vi/cash-account`, {
        headers: {
          "Authorization": `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJpeWc1Nzc4MEBuZXppZC5jb20iLCJpYXQiOjE2ODQ0MjQ4NDQsImV4cCI6MTY4NDQyNjY0NH0.8WYKNWHHzRV1TKiB-jn1XqJDjzjcVWV6xRT4B4r4Tns`
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
      const { data } = await axios.post(`${API}/api/vi/cash-account`, JSON.stringify(cardInfo), {
        headers: {
          "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJpeWc1Nzc4MEBuZXppZC5jb20iLCJpYXQiOjE2ODQ0MjQ4NDQsImV4cCI6MTY4NDQyNjY0NH0.8WYKNWHHzRV1TKiB-jn1XqJDjzjcVWV6xRT4B4r4Tns",
          "Content-Type": "application/json"
        }
      })
      console.log(data);

      getCards()
    } catch (error) {
      console.log(error);
    }
  }


  async function transfer(fromId, toId, file) {
    try {
      const { data } = await axios.patch(`${API}/api/vi/cash-account/${fromId}/transfer/${toId}`, file, {
        headers: {
          "Authorization": "Bearer ",
          "Content-Type": "application/json"
        }
      });
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <cardContext.Provider value={{
      getCards,
      cardPost,
      transfer,

      cards: state.cards
    }}>
      {children}
    </cardContext.Provider>
  );
};

export default CardContextProvider;