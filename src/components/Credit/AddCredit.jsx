import { Box, Button, Input, Select, useMediaQuery } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { addCardAcc } from '../../store/CardAccSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createCredit } from '../../store/creditSlice';
import Navbar from '../Navbar/Navbar';

const AddCredit = () => {
  const [name, setName] = useState('');
  const [indebtedness, setIndeb] = useState(0);
  const [currency, setCurrency] = useState('');

  const dispatch = useDispatch();
  
  
  const addCredit = async () => {
    await dispatch(
      createCredit({
        name,
        indebtedness: Number(indebtedness),
        currency,
        navigate,
      })
      );
    };
  //   useEffect(() => {
  //     addCard()
  // },[])
  const [isSmallerThan800] = useMediaQuery('(max-width: 700px)')

  const navigate = useNavigate()
  return (
    <Box>
      <Navbar/>
        <Box display='flex' flexDirection='column' alignItems='center'>


         <Box w={isSmallerThan800 ? '300px' : '500px'} mt='50px'>

      <Input mb='10px' type="text" placeholder="Название"  value={name}
        onChange={e => setName(e.target.value)}/>
      <Input mb='10px' type="number" placeholder="indebtedness"  value={indebtedness}
        onChange={e => setIndeb(e.target.value)}/>
      {/* <Input type="text" placeholder="currency" value={currency}
        onChange={e => setCurrency(e.target.value)} /> */}
        <Select  mb='10px' placeholder="Валюта" value={currency}
        onChange={e => setCurrency(e.target.value)}>
        <option value='USD'>USD</option>
        <option value='EUR'>EUR</option>
        <option value='KZT'>KZT</option>
      </Select>
        </Box>
      <Button h='55px' bg='#EBBB55' w= {isSmallerThan800 ? '300px' : '500px'} mb='40px' m='20px' onClick={addCredit}>add credit</Button>
          </Box>
    </Box>
  );
};

export default AddCredit;
