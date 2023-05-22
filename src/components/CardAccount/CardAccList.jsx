import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CardAcc from './CardAcc';
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
import Navbar from '../Navbar/Navbar';

const CardAccList = () => {
  useEffect(() => {
    getcard()
  },[])
  
  const cards = useSelector(state => state.cardAcc.cardacc);
  console.log(cards);
  const dispatch = useDispatch()
  const getcard = async () => {
    await dispatch(
      getCards()
      );
    };
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
      <Flex justify='center' wrap='wrap'>

      <Flex width='100%'  justify='center' direction='column'  >
        <Box mt='40px' display='flex' justifyContent='space-between' width='100%'>
          <Box fontSize='30px'>Счет Карты</Box>
          <Box>Всего: 0 $</Box>
        </Box>
          <Box p='10px'  flexWrap='wrap' maxHeight='1000px' display='flex' w='100%' h={isSmallerThan800 ? "600px" : '200px'} bg='gray.100' filter="drop-shadow(2px 2px 1px rgba(0, 0, 0, 0.25));">
      {cards.map(card => {
        return <CardAcc key={card.id} {...card} />;
      })}
      {/* <Box>
        adsfadgdsfgvs
      </Box> */}

          </Box>
      <Link to="/addcard">
        <Button mt='20px' ml='10px'>добавить карту</Button>
      </Link>
      </Flex>
      </Flex>
      
    </div>
  );
};

export default CardAccList;