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
import Loan from './Loan';
import CreditList from '../Credit/CreditList';

const LoanList = () => {
  useEffect(() => {
    getloan()
  },[])
  
  const loans = useSelector(state => state.loan.loans);
  const loans2 = loans.data
  const dispatch = useDispatch()
  const getloan = async () => {
     await dispatch(
        getLoans()
        );
      };
      
      console.log(loans);
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
          <Box fontSize='30px'>Заем</Box>
          <Box>Всего: 0 $</Box>
        </Box>
          <Box p='10px' flexWrap='wrap' maxHeight='1000px' display='flex' w='100%' h={isSmallerThan800 ? "800px" : '200px'} bg='gray.100' filter="drop-shadow(2px 2px 1px rgba(0, 0, 0, 0.25));">
      {loans.map(loan => {
        return <Loan key={loan.id} {...loan} />;
      })}

          </Box>
      <Link to="/addloan">
        <Button mt='20px' ml='10px'>Добавить Заем</Button>
      </Link>
      </Flex>
      </Flex>

      {/* <CreditList/> */}
      
    </div>
  );
};

export default LoanList;