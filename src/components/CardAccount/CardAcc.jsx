import { Box, Button } from '@chakra-ui/react';
import React from 'react';

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
  cardType,
  cvv,
}) => {
  return (
    <Box key={id}>
      <Box>{name}</Box>
      <Box>{balance}</Box>
      <Box>{currency}</Box>
      <Box>{color}</Box>
      <Box>{icon}</Box>
      <Box>{cardHolderName}</Box>
      <Box>{bankName}</Box>
      <Box>{cardNumber}</Box>
      <Box>{cardType}</Box>
      <Box>{cvv}</Box>
    </Box>
  );
};

export default CardAcc;
