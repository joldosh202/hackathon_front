import { Button, Input } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { updateBal } from '../../store/CardAccSlice';

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
  return (
    <div>
      <Input type="number" placeholder="balance" value={balance} onChange={(e) => setBal(e.target.value)}/>
      <Button onClick={update}> update</Button>

    </div>
  );
};

export default UpdateBalance;
