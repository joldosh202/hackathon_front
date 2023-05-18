import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CardAcc from './CardAcc';
import axios from 'axios';
import { getCards } from '../../store/CardAccSlice';

const CardAccList = () => {
  useEffect(() => {
    getcard()
  },[])
  
  const cards = useSelector(state => state.cardAcc.cardacc);
  console.log(cards);
  const dispatch = useDispatch()
  const getcard = async () => {
    await dispatch(
      getCards()
      );
    };
  
  return (
    <div>
      {cards.map(card => {
        return <CardAcc key={card.id} {...card} />;
      })}
      
    </div>
  );
};

export default CardAccList;