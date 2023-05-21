import {
  Box,
  Button,
  Card,
  CardBody,
  Flex,
  Grid,
  GridItem,
  IconButton,
  Image,
  Input,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useMediaQuery,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { login } from '../../store/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../../store/authSlice';
import { Link, useNavigate } from 'react-router-dom';
import { HamburgerIcon } from '@chakra-ui/icons';
const LoginRedux = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  //   const { user } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  //   console.log(user);
  const navigate = useNavigate()

  const loginBtn = async () => {
    await dispatch(
      login({
        email,
        password,
        navigate,
      })
    );
  };
  //   const { userEmail } = useSelector(state => state.auth);
  //   console.log(setUserEmail);
  const [isSmallerThan800] = useMediaQuery('(max-width: 1100px)')
  return (
    <div>
      

      <Box
        // bg="radial-gradient(96.05% 397.61% at 123.3% -27.36%, #EBBB55 0%, #546762 91.26%, #465F63 100%)"
        w="100%"
      >
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
        <Grid templateColumns="repeat(6, 1fr)" gap={0} pr="20" pl="20" pt="5">
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
            <Link to="/budget">
              <Box fontSize="20px" fontWeight="700">
                Бюджет
              </Box>
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
            <Box fontSize="20px" fontWeight="700">
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
            <Box fontSize="20px" fontWeight="700">
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
            <Box fontSize="20px" fontWeight="700">
              Транзакции
            </Box>
          </GridItem>
          
        </Grid>
          }
      </Box>
      <Box h='1000px'  bg='#5CA297' display="flex"  alignItems='center' flexDirection="column">

  
  <Box mt='50px'  w={isSmallerThan800 ? '300px' : "637px"} display="flex" justifyContent='center' alignItems='center' flexDirection="column">
  <Image  w='200px' src={require('../../imgs/logovector.png')}/>
    
    <Box textAlign='center' color='white' fontSize='30px' >Умное Управление</Box >
      <Input
        type="email"
        placeholder="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        bg='white'
        borderRadius='10px'
        h='60px'
        mb='40px'
        />
      <Input
        type="password"
        placeholder="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        bg='white'
        borderRadius='10px'
        h='60px'
        mb='40px'
        />

      <Button h='55px' bg='#EBBB55' w={isSmallerThan800 ? '300px' : "637px"} onClick={loginBtn}>Далее</Button >
        </Box>
        </Box>
    </div>
  );
};

export default LoginRedux;
