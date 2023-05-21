import { Box, Button } from '@chakra-ui/react';
import React from 'react';
import { useDispatch } from 'react-redux';
import { updateBal } from '../../store/CardAccSlice';
import { Link } from 'react-router-dom';

const CashAcc = ({
  id,
  name,
  balance,
  currency,
  color,
  icon,
  cardHolderName,
  bankName,
  cardNumber,
  accountType,
  cvv,
}) => {

  const dispatch = useDispatch()
  
  return (
    <Box p='20px' h='180px' mr='10px' bg='#EBBB55' borderRadius='20px' >
      <Box>Имя карты: {name}</Box>
      <Box>баланс: {balance}</Box>
      <Box>Валюта: {currency}</Box>
      {/* <Box>Цвет: {color}</Box>
      <Box>Иконка: {icon}</Box> */}
      {/* <Box>{cardHolderName}</Box>
      <Box>{bankName}</Box> */}
      {/* <Box>{cardNumber}</Box> */}
      <Box>Тип Счета: {accountType}</Box>
      {/* <Box>{cvv}</Box> */}
      {/* <Link to={`/updatebalance/${id}`}>
        <Button >update balance</Button>
      </Link> */}
      <Link to={`/onecash/${id}`}>
      <Button mt='10px'>Подробнее</Button>
      </Link>
    </Box>
  );
};

export default CashAcc;
