import React, { useState } from 'react';
import {  transfer } from '../../store/CardAccSlice';
import { useDispatch } from 'react-redux';
import { Box, Button, Input } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';

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
         
<Input type="number" placeholder="to" value={toId} onChange={(e) => setToId(e.target.value)}/>
<Input type="number" placeholder="amount" value={amount} onChange={(e) => setAmount(e.target.value)}/>
<Input type="text" placeholder="accType" value={accType} onChange={(e) => setAccType(e.target.value)}/>
<Button onClick={transf}>transfer</Button>
      </Box>
   );
};

export default Transfer;
