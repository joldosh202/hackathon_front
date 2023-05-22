import { Box, Button, Input, useMediaQuery } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { limit } from '../../store/CardAccSlice';
import Navbar from '../Navbar/Navbar';
import { cashLimit } from '../../store/cashSlice';

const CashLimit = () => {
  const dispatch = useDispatch()
  const [limit2,setBal] = useState('')
  const params = useParams()
  const id1 = params.id 
  const id = Number(id1)
  console.log(id);
  const update = async () => {
    await dispatch(
      cashLimit({
        id,
        limit2: Number(limit2),
      })
    );
  };
  const [isSmallerThan800] = useMediaQuery('(max-width: 700px)')

  return (
    <div>
      <Navbar/>
      <Box display='flex' flexDirection='column' alignItems='center'>
<Box w={isSmallerThan800 ? '300px' : '500px'} mt='100px'>

      <Input type="number" placeholder="лимит" value={limit2} onChange={(e) => setBal(e.target.value)}/>
</Box>
      <Button  h='55px' bg='#EBBB55' w= {isSmallerThan800 ? '300px' : '500px'} mb='40px' m='20px' onClick={update}>Установить лимит</Button>

      </Box>
    </div>
  );
};

export default CashLimit;
