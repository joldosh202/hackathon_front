import React, { useState } from 'react';
import { addBalance } from '../../store/CardAccSlice';
import { useDispatch } from 'react-redux';
import { Box, Button, Input } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';

const AddBal = () => {
   const dispatch = useDispatch()
  const [amount,setAmount] = useState('')
  const [descrip,setDescrip] = useState('')
//   const [accId,setAccId] = useState('')
  const [accName,setAccName] = useState('')
  const [accType,setAccType] = useState('')
  const params = useParams()
  const id1 = params.id 
  const accId = Number(id1)
  const [category,setCategory] = useState({accId})
//   console.log(id);
  const subtr = async () => {
    await dispatch(
      addBalance({
         amount, descrip,accId, accName, category,accType
      })
    );
  };
   return (
      <Box>
         
<Input type="number" placeholder="amount" value={amount} onChange={(e) => setAmount(e.target.value)}/>
<Input type="text" placeholder="descrip" value={descrip} onChange={(e) => setDescrip(e.target.value)}/>
{/* <Input type="number" placeholder="accId" value={id} /> */}
<Input type="text" placeholder="accName" value={accName} onChange={(e) => setAccName(e.target.value)}/>
{/* <Input type="number" placeholder="category" value={category} onChange={(e) => setCategory(e.target.value)}/> */}
{/* <Input type="text" placeholder="accType" value={accType} onChange={(e) => setAccType(e.target.value)}/> */}
<Button onClick={subtr}> update</Button>
      </Box>
   );
};

export default AddBal;
