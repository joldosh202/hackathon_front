import { Box, Button, Input } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { addCardAcc } from '../../store/CardAccSlice';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { createLoan, repayloan } from '../../store/loanSlice';

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
  return (
    <Box>
      <Input type="number" placeholder="amount"  value={amount}
        onChange={e => setAmount(e.target.value)}/>
      <Input type="text" placeholder="descr" value={descrip}
        onChange={e => setDescrip(e.target.value)} />
        <Input type="text" placeholder="accName" value={accName}
        onChange={e => setAccName(e.target.value)} />
        <Input type="text" placeholder="accType" value={accType}
        onChange={e => setAccType(e.target.value)} />
      <Button onClick={repay}>add</Button>
    </Box>
  );
};

export default LoanRepay;
