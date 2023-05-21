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
      {isSmallerThan800 ? 
      <Menu >
      <Box display='flex'>

      <Box
          ml="20"
          as="main"
          colSpan="1"
          h="10"
          display="flex"
          height="50px"
          width="108px"
          alignItems="center"
          justifyContent="center"
          pb="17px"
          >
          <Image src={require('../../imgs/лого (1).png')} />
        </Box>
<MenuButton
  as={IconButton}
  aria-label='Options'
  icon={<HamburgerIcon />}
  variant='outline'
/>
<MenuList>
    <MenuItem >
    Бюджет
    </MenuItem>
    <MenuItem  >
    Финансовые цели
    </MenuItem>
    <MenuItem  >
    Статистика
    </MenuItem>
    <MenuItem >
    Транзакции
    </MenuItem>
    <MenuItem onClick={logoutfunc}>
    
            Выйти
        
    </MenuItem>
  </MenuList>
</Box>
</Menu>
      :
      <Grid
      templateColumns="repeat(7, 1fr)"
      gap={0}
      pr="20"
        pl="20"
        pt="5"
        bg="#5FA499"
      >
        <GridItem
          ml="20"
          as="main"
          colSpan="1"
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
          <Box color="white" fontSize="20px" fontWeight="700">
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
          <Box fontSize="20px" fontWeight="700" color="white">
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
          <Box fontSize="20px" fontWeight="700" color="white">
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
          <Box fontSize="20px" fontWeight="700" color="white">
            Транзакции
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
          <Box fontSize="20px" fontWeight="700" color="white">
            {localStorage.getItem('username')}
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
          <Button onClick={logoutfunc} fontSize="20px" fontWeight="700" color="#26564E">
            Выйти
          </Button>
        </GridItem>
      </Grid>
      }

      <Box>
        Card Account List
      </Box>
      <Link to="/addcard">
        <Button>add Card account</Button>
      </Link>
      <Flex justify='center'>

      <Flex w='1200px'  justify='center' direction='column'  >
        <Box display='flex' justifyContent='space-between' width='100%'>
          <Box>Счета</Box>
          <Box>Всего: 0 $</Box>
        </Box>
          <Box  flexWrap='wrap' maxHeight='1000px' display='flex' w='100%' h={isSmallerThan800 ? "400px" : '200px'} bg='gray.100' filter="drop-shadow(2px 2px 1px rgba(0, 0, 0, 0.25));">
      {cards.map(card => {
        return <CardAcc key={card.id} {...card} />;
      })}

          </Box>
      </Flex>
      </Flex>
      
    </div>
  );
};

export default CardAccList;