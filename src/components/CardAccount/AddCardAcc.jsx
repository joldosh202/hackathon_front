import { Box, Button, Input, Select, useMediaQuery } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { addCardAcc } from '../../store/CardAccSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

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
        navigate,
      })
      );
    };
  //   useEffect(() => {
  //     addCard()
  // },[])
  const [isSmallerThan800] = useMediaQuery('(max-width: 1100px)')

  const navigate = useNavigate()
  return (
    <Box>
      <Navbar/>
      <Box display='flex' flexDirection='column' alignItems='center'>
      <Box w={isSmallerThan800 ? '300px' : '500px'} mt='50px'>

      <Input type="text" placeholder="Название"  value={name} mb="10px"
        onChange={e => setName(e.target.value)}/>
      <Input type="number" placeholder="Баланс"  value={balance} mb="10px"
        onChange={e => setBalance(e.target.value)}/>
      {/* <Input type="text" placeholder="Валюта" value={currency} mb="10px"
        onChange={e => setCurrency(e.target.value)} /> */}
        <Select placeholder="Валюта" value={currency}
        onChange={e => setCurrency(e.target.value)}>
        <option value='USD'>USD</option>
        {/* <option value='MASTERCARD'>MASTERCARD</option>
        <option value='UNIONPAY'>UNIONPAY</option> */}
      </Select>
      <Input type="text" placeholder="Цвет" value={color} mb="10px"
        onChange={e => setColor(e.target.value)}/>
      <Input type="text" placeholder="Иконка" value={icon} mb="10px"
        onChange={e => setIcon(e.target.value)}/>
      {/* <Input type="text" placeholder="cardHolderName" value={cardHolderName}
        onChange={e => setCardHolderName(e.target.value)}/>
        <Input type="text" placeholder="bankName" value={bankName}
        onChange={e => setBankName(e.target.value)}/>
        <Input type="number" placeholder="cardNumber" value={cardNumber}
      onChange={e => setCardNumber(e.target.value)}/> */}
      <Select placeholder="Тип Карты" value={paymentSystem}
        onChange={e => setCardType(e.target.value)}>
        <option value='VISA'>VISA</option>
        <option value='MASTERCARD'>MASTERCARD</option>
        <option value='UNIONPAY'>UNIONPAY</option>
      </Select>

      {/* <Input type="text" placeholder="paymentSystem" value={paymentSystem}
        onChange={e => setCardType(e.target.value)} /> */}
      {/* <Input type="text" placeholder="cvv" value={cvv}
        onChange={e => setCvv(e.target.value)}/> */}
        </Box>
      <Button h='55px' bg='#EBBB55' w={isSmallerThan800 ? '300px' : '500px'}  mb='40px' m='20px' onClick={addCard}>add</Button>
        </Box>
    </Box>
  );
};

export default AddCardAcc;
