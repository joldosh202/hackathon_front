// 
// const [token, setToken] = useState('')
   
   //  
//    return (
//       <div>
//          <Input  type="text"
//         placeholder="text"
//         value={token}
//         onChange={e => setToken(e.target.value)}/>
//         <Button onClick={verifyBtn}>
//          verify
//         </Button>
//       </div>
import { ChevronLeftIcon } from '@chakra-ui/icons';
import {
   Box,
   Button,
   Flex,
   Grid,
   GridItem,
   Image,
   Input,
   Wrap,
 } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { verifyEmail } from '../../store/authSlice';

const VerifyEmail = () => {
   const [vertoken, setVertoken] = useState('')
   const url = vertoken.replace('localhost', '35.237.122.86')
   console.log(url);
   const emailval = localStorage.getItem('username')
   const dispatch = useDispatch();
   const verifyBtn = async () => {
      await dispatch(
        verifyEmail({
         url
        })
      );
   }
   return (
      <Box>
         <Grid
        templateColumns="repeat(7, 1fr)"
        gap={0}
        pr="20"
        pl="20"
        pt="5"
      >
        <GridItem
          ml="20"
          as="main"
          colSpan="2"
          h="10"
          display="flex"
          height="50px"
          width="108px"
          alignItems="center"
          justifyContent="center"
          pb="17px"
        >
          <Link to='/'>
          <Image src={require('../../imgs/лого (1).png')} />
          </Link>
        </GridItem>

        <GridItem
          display="flex"
          alignItems="center"
          as="aside"
          justifyContent="center"
          colSpan="1"
          h="10"
        >
          <Box  fontSize="20px" fontWeight="700">
            Бюджет
          </Box>
        </GridItem>
        <GridItem
          display="flex"
          alignItems="center"
          as="aside"
          justifyContent="center"
          colSpan="1"
          h="10"
        >
          <Box fontSize="20px" fontWeight="700" >
            Финансовые цели
          </Box>
        </GridItem>
        <GridItem
          display="flex"
          alignItems="center"
          as="aside"
          justifyContent="center"
          colSpan="1"
          h="10"
        >
          <Box fontSize="20px" fontWeight="700" >
            Статистика
          </Box>
        </GridItem>
        <GridItem
          display="flex"
          alignItems="center"
          as="aside"
          colSpan="1"
          justifyContent="center"
          h="10"
        >
          <Box fontSize="20px" fontWeight="700" >
            Транзакции
          </Box>
        </GridItem>
      </Grid>
      <Box bg="#60A49A" w='100%' h='1000px' display='flex'  flexDirection='column' alignItems='center'>
         <Box mt='50px' fontSize='24px' color="white" mb="40px">
         <ChevronLeftIcon/>  Регистрация Нового пользователя
         </Box>
         <Image w='140px' height='140px' src={require("../../imgs/verifyphoto.png")}/>
      <Box color="white" mt='15px'fontSize='20'>
         {emailval}
         
      </Box>
      <Box color="white" mt='10px' mb="20px">
      проверьте свою почту
      </Box>
      <Box>
         <Input placeholder='token' value={vertoken} onChange={(e) => setVertoken(e.target.value)}/>
      </Box>
      <Button onClick={verifyBtn}>Потвердить</Button>
      <Link to='/login'>
      <Button h='55px' bg='#EBBB55' w='437px'>
         Далее
      </Button>
      </Link>
      <Box color="white" mt="40px" mb="15px">если не приходит сообщение в течении 10 - 15 секунд</Box>
      <Box color="white">Отправить повторно</Box>
      </Box>
      </Box>
   );
};

export default VerifyEmail;