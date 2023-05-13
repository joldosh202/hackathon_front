import React, { useState } from 'react';
import axios from 'axios';
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  VStack,
  useToast,
} from '@chakra-ui/react';

export default function Test() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const toast = useToast();

  const handleSubmit = async event => {
    event.preventDefault();
    const data = { firstName, lastName, email, password };
    try {
      const response = await axios.post('/api/register', data, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      toast({
        title: 'Регистрация прошла успешно!',
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
      // Добавьте здесь логику для обработки ответа от сервера, если это необходимо
    } catch (error) {
      toast({
        title: 'Произошла ошибка при регистрации',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <VStack spacing={4}>
        <FormControl id="firstName" isRequired>
          <FormLabel>Имя</FormLabel>
          <Input
            type="text"
            value={firstName}
            onChange={event => setFirstName(event.target.value)}
          />
        </FormControl>

        <FormControl id="lastName" isRequired>
          <FormLabel>Фамилия</FormLabel>
          <Input
            type="text"
            value={lastName}
            onChange={event => setLastName(event.target.value)}
          />
        </FormControl>

        <FormControl id="email" isRequired>
          <FormLabel>Почта</FormLabel>
          <Input
            type="email"
            value={email}
            onChange={event => setEmail(event.target.value)}
          />
        </FormControl>

        <FormControl id="password" isRequired>
          <FormLabel>Пароль</FormLabel>
          <Input
            type="password"
            value={password}
            onChange={event => setPassword(event.target.value)}
          />
        </FormControl>

        <Button colorScheme="blue" type="submit">
          Продолжить
        </Button>
      </VStack>
    </form>
  );
}
