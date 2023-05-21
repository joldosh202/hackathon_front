import { Box, Button, Input, useMediaQuery } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { updateBal } from '../../store/CardAccSlice';
import Navbar from '../Navbar/Navbar';

const UpdateBalance = () => {
  const dispatch = useDispatch()
  const [balance,setBal] = useState('')
  const params = useParams()
  const id1 = params.id 
  const id = Number(id1)
  console.log(id);
  const update = async () => {
    await dispatch(
      updateBal({
        id,
        balance,
      })
    );
  };
  const [isSmallerThan800] = useMediaQuery('(max-width: 700px)')

  return (
    <div>
      <Navbar/>
      <Box display='flex' flexDirection='column' alignItems='center'>
<Box w={isSmallerThan800 ? '300px' : '500px'} mt='50px'>

      <Input type="number" placeholder="новый баланс" value={balance} onChange={(e) => setBal(e.target.value)}/>
</Box>
      <Button  h='55px' bg='#EBBB55' w= {isSmallerThan800 ? '300px' : '500px'} mb='40px' m='20px' onClick={update}> update</Button>

      </Box>
    </div>
  );
};

export default UpdateBalance;
