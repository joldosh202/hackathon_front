import React, { useState } from 'react';
import {  transfer } from '../../store/CardAccSlice';
import { useDispatch } from 'react-redux';
import { Box, Button, Input } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

const Transfer = () => {
   const dispatch = useDispatch()
   const [toId,setToId] = useState('')
   const [accType,setAccType] = useState('')
   const [amount,setAmount] = useState(0)
  const params = useParams()
  const id1 = params.id 
  const fromId = Number(id1)
//   console.log(id);
  const transf = async () => {
    await dispatch(
      transfer({
         amount,fromId, toId,accType
      })
    );
  };
   return (
      <Box>
        <Navbar/>
         <Box display='flex' flexDirection='column' alignItems='center'>
<Box w='500px' mt="50px">

<Input mb='10px' type="number" placeholder="to" value={toId} onChange={(e) => setToId(e.target.value)}/>
<Input mb='10px' type="number" placeholder="amount" value={amount} onChange={(e) => setAmount(e.target.value)}/>
<Input mb='10px' type="text" placeholder="accType (CASH,CARD)" value={accType} onChange={(e) => setAccType(e.target.value)}/>
</Box>
<Button  h='55px' bg='#EBBB55' w= "500px" mb='40px' m='20px' onClick={transf}>transfer </Button>
         </Box>
      </Box>
   );
};

export default Transfer;
