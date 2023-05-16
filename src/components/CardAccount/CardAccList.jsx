import React from 'react';
import { useSelector } from 'react-redux';
import CardAcc from './CardAcc';

const CardAccList = () => {
  const cards = useSelector(state => state.CardAcc.CardAccounts);
  return (
    <div>
      {cards.map(card => {
        <CardAcc card={card} />;
      })}
    </div>
  );
};

export default CardAccList;
