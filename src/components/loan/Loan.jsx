import { Box, Button } from '@chakra-ui/react';
import React from 'react';
import { useDispatch } from 'react-redux';
import { updateBal } from '../../store/CardAccSlice';
import { Link } from 'react-router-dom';

const Loan = ({
   id,
 name,
 indebtedness,
 currency,
}) => {

  const dispatch = useDispatch()
  
  return (
    <Box p='20px' h='180px' mr='10px' bg='#EBBB55' borderRadius='20px'>
      <Box>Имя: {name}</Box>
      <Box>indebtedness: {indebtedness}</Box>
      <Box>Валюта: {currency}</Box>
      <Link to={`/oneloan/${id}`}>
      <Button mt='20px'>Подробнее</Button>
      </Link>
    </Box>
  );
};

export default Loan;
