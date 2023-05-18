import { Box, Button, Input } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { addCardAcc } from '../../store/CardAccSlice';
import { useDispatch } from 'react-redux';

const AddCardAcc = () => {
  const [name, setName] = useState('');
  const [balance, setBalance] = useState('');
  const [currency, setCurrency] = useState('');
  const [color, setColor] = useState('');
  const [icon, setIcon] = useState('');
  const [cardHolderName, setCardHolderName] = useState('');
  const [bankName, setBankName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [paymentSystem, setCardType] = useState('');
  const [cvv, setCvv] = useState('');

  const dispatch = useDispatch();
  
  
  const addCard = async () => {
    await dispatch(
      addCardAcc({
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
      })
      );
    };
  //   useEffect(() => {
  //     addCard()
  // },[])
  return (
    <Box>
      <Input type="text" placeholder="name"  value={name}
        onChange={e => setName(e.target.value)}/>
      <Input type="number" placeholder="balance"  value={balance}
        onChange={e => setBalance(e.target.value)}/>
      <Input type="text" placeholder="currency" value={currency}
        onChange={e => setCurrency(e.target.value)} />
      <Input type="text" placeholder="color" value={color}
        onChange={e => setColor(e.target.value)}/>
      <Input type="text" placeholder="icon" value={icon}
        onChange={e => setIcon(e.target.value)}/>
      {/* <Input type="text" placeholder="cardHolderName" value={cardHolderName}
        onChange={e => setCardHolderName(e.target.value)}/>
      <Input type="text" placeholder="bankName" value={bankName}
        onChange={e => setBankName(e.target.value)}/>
      <Input type="number" placeholder="cardNumber" value={cardNumber}
        onChange={e => setCardNumber(e.target.value)}/> */}
      <Input type="text" placeholder="paymentSystem" value={paymentSystem}
        onChange={e => setCardType(e.target.value)} />
      {/* <Input type="text" placeholder="cvv" value={cvv}
        onChange={e => setCvv(e.target.value)}/> */}
      <Button onClick={addCard}>add</Button>
    </Box>
  );
};

export default AddCardAcc;
