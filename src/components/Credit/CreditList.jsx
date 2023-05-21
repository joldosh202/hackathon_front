import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import CardAcc from './CardAcc';
import axios from 'axios';
import { getCards } from '../../store/CardAccSlice';
import { Box, Button,Flex,Grid,GridItem,IconButton,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useMediaQuery, } from '@chakra-ui/react';
import { Link, useNavigate } from 'react-router-dom';
import { HamburgerIcon } from '@chakra-ui/icons';
import { logout } from '../../store/authSlice';
import { getLoans } from '../../store/loanSlice';
import Navbar from '../Navbar/Navbar';
// import Loan from './Loan';
import { getCredits } from '../../store/creditSlice';
import Credit from './Credit';

const CreditList = () => {
  useEffect(() => {
    getCredit()
  },[])
  
  const credits = useSelector(state => state.credit.credits);
  const dispatch = useDispatch()
  const getCredit = async () => {
     await dispatch(
        getCredits()
        );
      };
      
      console.log(credits);
    const navigate = useNavigate()
  const [isSmallerThan800] = useMediaQuery('(max-width: 1100px)')
const logoutfunc = async () => {

  await dispatch(logout(navigate))
}
  
  return (
    <div>
      {/* <Navbar/> */}
      {/* <Box>
        Card Account List
      </Box> */}
      <Flex justify='center'>

      <Flex w='1200px'  justify='center' direction='column'  >
        <Box mt='40px' display='flex' justifyContent='space-between' width='100%'>
          <Box fontSize='30px'>Кредиты</Box>
          <Box>Всего: 0 $</Box>
        </Box>
          <Box p='10px'  flexWrap='wrap' maxHeight='1000px' display='flex' w='100%' h={isSmallerThan800 ? "400px" : '200px'} bg='gray.100' filter="drop-shadow(2px 2px 1px rgba(0, 0, 0, 0.25));">
      {credits.map(credit => {
        return <Credit key={credit.id} {...credit} />;
      })}

          </Box>
      <Link to="/addcredit">
        <Button mb='50px' mt='20px' ml="10px">Добавить Кредит</Button>
      </Link>
      </Flex>
      </Flex >
      
    </div>
  );
};

export default CreditList;