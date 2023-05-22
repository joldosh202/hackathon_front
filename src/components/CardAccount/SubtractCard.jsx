import React, { useState } from 'react';
import { subtract } from '../../store/CardAccSlice';
import { useDispatch } from 'react-redux';
import { Box, Button, Input, useMediaQuery } from '@chakra-ui/react';
import { useNavigate, useParams } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

const SubtractBal = () => {
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
const navigate = useNavigate()
  const subtr = async () => {
    await dispatch(
      subtract({
         amount, descrip,accId, accName, category,accType, navigate
      })
    );
  };
  const [isSmallerThan800] = useMediaQuery('(max-width: 700px)')

   return (
      <Box>
         <Navbar/>
         <Box display='flex' flexDirection='column' alignItems='center'>

<Box mt='50px' w={isSmallerThan800 ? '300px' : '500px'}>

<Input mb='10px' type="number" placeholder="Сумма" value={amount} onChange={(e) => setAmount(e.target.value)}/>
<Input mb='10px' type="text" placeholder="Описание" value={descrip} onChange={(e) => setDescrip(e.target.value)}/>
{/* <Input type="number" placeholder="accId" value={id} /> */}
<Input mb='10px' type="text" placeholder="Название" value={accName} onChange={(e) => setAccName(e.target.value)}/>
{/* <Input type="number" placeholder="category" value={category} onChange={(e) => setCategory(e.target.value)}/> */}
{/* <Input type="text" placeholder="accType" value={accType} onChange={(e) => setAccType(e.target.value)}/> */}
</Box>
<Button h='55px' bg='#EBBB55' w= {isSmallerThan800 ? '300px' : '500px'} mb='40px' m='20px' onClick={subtr}> update</Button>
         </Box>
      </Box>
   );
};

export default SubtractBal;
