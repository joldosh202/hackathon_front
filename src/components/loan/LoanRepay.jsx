import { Box, Button, Input, Select, useMediaQuery } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { addCardAcc } from '../../store/CardAccSlice';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { createLoan, repayloan } from '../../store/loanSlice';
import Navbar from '../Navbar/Navbar';

const LoanRepay = () => {
  const [amount, setAmount] = useState('');
  const [descrip, setDescrip] = useState('');
  const [accId, setAccId] = useState(0);
  const [accName, setAccName] = useState('');
  const [accType, setAccType] = useState('');
  const params = useParams()
  const id1 = params.id 
  const id = Number(id1)
  const dispatch = useDispatch();
  
  
  const repay = async () => {
    await dispatch(
      repayloan({
        amount,
        descrip,
        accId: Number(id),
        accName,
        accType
      })
      );
    };
  //   useEffect(() => {
  //     addCard()
  // },[])
  const navigate = useNavigate()
  const [isSmallerThan800] = useMediaQuery('(max-width: 700px)')

  return (
    <>
      <Navbar/>
      
        
      <Box display='flex' flexDirection='column' alignItems='center'>
<Box w={isSmallerThan800 ? '300px' : '500px'} mt='50px'>


      <Input mb='10px' type="number" placeholder="Сумма"  value={amount}
        onChange={e => setAmount(e.target.value)}/>
      <Input mb='10px' type="text" placeholder="Описание" value={descrip}
        onChange={e => setDescrip(e.target.value)} />
        <Input mb='10px' type="text" placeholder="Название" value={accName}
        onChange={e => setAccName(e.target.value)} />
        {/* <Input type="text" placeholder="accType" value={accType}
        onChange={e => setAccType(e.target.value)} /> */}
        <Select  mb='10px' placeholder="Тип Счета" value={accType}
        onChange={e => setAccType(e.target.value)}>
        <option value='CARD'>Card</option>
        <option value='CASH'>Cash</option>
      </Select>
</Box>
      <Button h='55px' bg='#EBBB55' w= {isSmallerThan800 ? '300px' : '500px'} mb='40px' m='20px' onClick={repay}>Погасить</Button>
        </Box>
  
      
    
    
    </>
  );
};

export default LoanRepay;
