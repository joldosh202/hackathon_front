import { Box, Button,Flex,Grid,GridItem,IconButton,
   Image,
   Menu,
   MenuButton,
   MenuItem,
   MenuList, useMediaQuery } from '@chakra-ui/react';
 import React, { useContext, useEffect, useState } from 'react';
 import { useDispatch, useSelector } from 'react-redux';
 import { Link, useParams } from 'react-router-dom';
 import { updateBal } from '../../store/CardAccSlice';
 
 import { HamburgerIcon } from '@chakra-ui/icons';
import { cardContext } from '../../contexts/CardContextProvider';
import Navbar from '../Navbar/Navbar';
 
 const OneCash = () => {
  const { oneCash, getOneCash } = useContext(cardContext);
    
   //  const data = useSelector((state)  => state.cardAcc.oneCard)
    const [isSmallerThan800] = useMediaQuery('(max-width: 1100px)')
    //  const dispatch = useDispatch()
    const params = useParams()
    const id1 = params.id 
    const id = Number(id1)
    console.log(id);
   //  const getOne = async () => {
   //    await dispatch(
   //      getOneCard(
      //        id,
      
      //      )
      //    );
      //  };
      //  console.log(data);
      useEffect(() => {
         getOneCash(id)
      },[])
      console.log(oneCash);
   //  if (!data) {
   //     return <div>Loading...</div>; // Render a loading state while data is being fetched
   //   }
   //   console.log(oneCash);
   const font = {
    fontSize: "23px",
    mb: "10px"
  }
    return (
 <Box>
  <Navbar/>
     <Box  mt="50px" >
     <Box borderWidth='3px' borderColor="#EBBB55" width='90%' pl={isSmallerThan800 ? '15px' : '100px'} pb='40px' pt='50px' ml={isSmallerThan800 ? '15px' : '100px'} mt='50px'  >


       <Box sx={font}>Имя карты: { oneCash.name}</Box>
       <Box sx={font}>баланс: {oneCash.balance}</Box>
       <Box sx={font}>Валюта: {oneCash.currency}</Box>
       <Box sx={font}>Номер Карты: {oneCash.currency}</Box>
       <Box sx={font}>Тип Счета: {oneCash.accountType}</Box>
       {/* <Link to={`/updatebalance/${id}`}>
         <Button >update balance</Button>
        </Link> */}
       <Link to={`/subtractcash/${id}`}>
         <Button bg="#EBBB55" mr='10px'>Списать с Баланса</Button>
       </Link>
       <Link to={`/addcashbal/${id}`}>
         <Button bg="#EBBB55" mr='10px'>Добавить Баланс</Button>
       </Link>
       <Link to={`/cashlimit/${id}`}>
         <Button  bg="#EBBB55" mr='10px'>лимит</Button>
       </Link>
        </Box>
     </Box>
 </Box>
    );
 };
 
 export default OneCash;