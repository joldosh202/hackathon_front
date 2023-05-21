import { Box, Button, Input } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { addCardAcc } from '../../store/CardAccSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createLoan } from '../../store/loanSlice';

const AddLoan = () => {
  const [name, setName] = useState('');
  const [indebtedness, setIndeb] = useState(0);
  const [currency, setCurrency] = useState('');

  const dispatch = useDispatch();
  
  
  const addLoan = async () => {
    await dispatch(
      createLoan({
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
  const navigate = useNavigate()
  return (
    <Box>
      <Input type="text" placeholder="name"  value={name}
        onChange={e => setName(e.target.value)}/>
      <Input type="number" placeholder="indebtedness"  value={indebtedness}
        onChange={e => setIndeb(e.target.value)}/>
      <Input type="text" placeholder="currency" value={currency}
        onChange={e => setCurrency(e.target.value)} />
      <Button onClick={addLoan}>add</Button>
    </Box>
  );
};

export default AddLoan;
