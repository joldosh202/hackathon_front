import { Box, Button,Flex,Grid,GridItem,IconButton,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList, useMediaQuery } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { updateBal } from '../../store/CardAccSlice';

import { getOneCard } from '../../store/CardAccSlice';
import { HamburgerIcon } from '@chakra-ui/icons';
import Navbar from '../Navbar/Navbar';

const OneCard = () => {
   
   const data = useSelector((state)  => state.cardAcc.oneCard)
   const [isSmallerThan800] = useMediaQuery('(max-width: 1100px)')
   useEffect(() => {
      getOne()
   },[])
   const dispatch = useDispatch()
   const params = useParams()
   const id1 = params.id 
   const id = Number(id1)
   console.log(id);
   const getOne = async () => {
     await dispatch(
       getOneCard(
         id,
         
       )
     );
   };
   console.log(data);
   if (!data) {
      return <div>Loading...</div>; // Render a loading state while data is being fetched
    }
    const font = {
      fontSize: "23px",
      mb: "10px"
    }
   return (
<Box>
<Navbar/>
    <Box borderWidth='3px' borderColor="#EBBB55" width='90%' pl="100px" pb='40px' pt='50px' ml='100px' mt='50px'  >
      <Box sx={font}>Имя карты: { data.data && data.data.name}</Box>
      <Box sx={font}>баланс: {data.data && data.data.balance}</Box>
      <Box sx={font}>Валюта: {data.data && data.data.currency}</Box>
      {/* <Box>Цвет: {data.data && data.data.color}</Box>
      <Box>Иконка: {data.data && data.data.icon}</Box> */}
      {/* <Box>{data.data.cardHolderName}</Box>
      <Box>{data.data.bankName}</Box> */}
      <Box sx={font}>Номер Карты: {data.data && data.data.cardNumber}</Box>
      <Box sx={font}>Тип Карты: {data.data && data.data.paymentSystem}</Box>
      {/* <Box>{cvv}</Box> */}
      <Link to={`/updatebalance/${id}`}>
        <Button bg="#EBBB55" mr='10px' >Обновить Баланс</Button>
      </Link>
      <Link to={`/subtractcard/${id}`}>
        <Button bg="#EBBB55"mr='10px' >Вычесть Баланс</Button>
      </Link>
      <Link to={`/addcardbal/${id}`}>
        <Button bg="#EBBB55" mr='10px' >Добавить Баланс</Button>
      </Link>
      <Link to={`/transfercard/${id}`}>
        <Button bg="#EBBB55"mr='10px'>Перевод</Button>
      </Link>
    </Box>
</Box>
   );
};

export default OneCard;