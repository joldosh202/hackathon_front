import {
  Box,
  Button,
  Card,
  CardBody,
  Flex,
  Grid,
  GridItem,
  Image,
  Input,
  Text,
} from '@chakra-ui/react';import React, { useState } from 'react';
import { useRegisterMutation } from '../../store/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../../store/authSlice';
import { Link } from 'react-router-dom';
const RegisterRedux = () => {
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const dispatch = useDispatch();
  const registerBtn = async () => {
    await dispatch(
      register({
        first_name,
        last_name,
        email,
        password,
      })
    );
  };
  return (
    <div>
      <Box
        // bg="radial-gradient(96.05% 397.61% at 123.3% -27.36%, #EBBB55 0%, #546762 91.26%, #465F63 100%)"
        w="100%"
      >
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
            <Link to="/">
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
      </Box>
      <Box h='1000px'  bg='#5CA297' display="flex"  alignItems='center' flexDirection="column">
  
        <Box mt='50px'  w='637px' display="flex" justifyContent='center' alignItems='center' flexDirection="column">
        <Image  w='200px' src={require('../../imgs/logovector.png')}/>
          <Box textAlign='center' color='white' fontSize='30px' >Умное Управление</Box >

      <Input
        type="text"
        placeholder="first name"
        value={first_name}
        onChange={e => setFirstName(e.target.value)}
        bg='white'
        borderRadius='10px'
        h='60px'
        mb='40px'
        />
      <Input
        type="text"
        placeholder="last name"
        value={last_name}
        onChange={e => setLastName(e.target.value)}
        borderRadius='10px'
        bg='white'
        h='60px'
        mb='40px'


        />
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
        </Box>
        <Link to='/login'>
      <Button h='55px' bg='#EBBB55' w='637px' onClick={registerBtn}>Далее</Button>
        </Link>
        </Box>
    </div>
  );
};

export default RegisterRedux;
