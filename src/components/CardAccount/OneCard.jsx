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
          <Button fontSize="20px" fontWeight="700" color="#26564E">
            Выйти
          </Button>
        </GridItem>
      </Grid>
      }
    <Box p='20px' >
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
        <Button >update balance</Button>
      </Link>
      <Link to={`/subtractcard/${id}`}>
        <Button >subtract balance</Button>
      </Link>
      <Link to={`/addcardbal/${id}`}>
        <Button >add balance</Button>
      </Link>
      <Link to={`/transfercard/${id}`}>
        <Button >transfer</Button>
      </Link>
    </Box>
</Box>
   );
};

export default OneCard;