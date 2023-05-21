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

   return (
<Box>
<Navbar/>
    <Box ml='100px' mt='50px'  >
      <Box>Имя карты: { data.data && data.data.name}</Box>
      <Box>баланс: {data.data && data.data.balance}</Box>
      <Box>Валюта: {data.data && data.data.currency}</Box>
      {/* <Box>Цвет: {data.data && data.data.color}</Box>
      <Box>Иконка: {data.data && data.data.icon}</Box> */}
      {/* <Box>{data.data.cardHolderName}</Box>
      <Box>{data.data.bankName}</Box> */}
      <Box>Номер Карты: {data.data && data.data.cardNumber}</Box>
      <Box>Тип Карты: {data.data && data.data.paymentSystem}</Box>
      {/* <Box>{cvv}</Box> */}
      <Link to={`/updatebalance/${id}`}>
        <Button >Обновить Баланс</Button>
      </Link>
      <Link to={`/subtractcard/${id}`}>
        <Button >Вычесть Баланс</Button>
      </Link>
      <Link to={`/addcardbal/${id}`}>
        <Button >Добавить Баланс</Button>
      </Link>
      <Link to={`/transfercard/${id}`}>
        <Button >Перевод</Button>
      </Link>
    </Box>
</Box>
   );
};

export default OneCard;