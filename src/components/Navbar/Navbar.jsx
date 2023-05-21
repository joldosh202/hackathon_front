import React from 'react';
import { Box, Button,Flex,Grid,GridItem,IconButton,
   Image,
   Menu,
   MenuButton,
   MenuItem,
   MenuList,
   useMediaQuery, } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { logout } from '../../store/authSlice';
import { useNavigate,Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const Navbar = () => {
   const navigate = useNavigate()
   const dispatch = useDispatch()
   const logoutfunc = async () => {

      await dispatch(logout(navigate))
    }
  const [isSmallerThan800] = useMediaQuery('(max-width: 1100px)')

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
      </div>
   );
};

export default Navbar;