import { Box, Button } from '@chakra-ui/react';
import React from 'react';
import { useDispatch } from 'react-redux';
import { updateBal } from '../../store/CardAccSlice';
import { Link } from 'react-router-dom';

const CardAcc = ({
  id,
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
}) => {

  const dispatch = useDispatch()
  
  return (
    <Box p='20px' >
      <Box>Имя карты: {name}</Box>
      <Box>баланс: {balance}</Box>
      <Box>Валюта: {currency}</Box>
      {/* <Box>Цвет: {color}</Box>
      <Box>Иконка: {icon}</Box> */}
      {/* <Box>{cardHolderName}</Box>
      <Box>{bankName}</Box> */}
      {/* <Box>{cardNumber}</Box> */}
      <Box>Тип Карты: {paymentSystem}</Box>
      {/* <Box>{cvv}</Box> */}
      {/* <Link to={`/updatebalance/${id}`}>
        <Button >update balance</Button>
      </Link> */}
      <Link to={`/onecard/${id}`}>
      <Button>Подробнее</Button>
      </Link>
    </Box>
  );
};

export default CardAcc;
