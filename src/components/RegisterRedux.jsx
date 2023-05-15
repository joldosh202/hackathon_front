import { Button, Input } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useRegisterMutation } from '../store/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../store/authSlice';
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
      {/* <form> */}
      <div>Register</div>
      <Input
        type="text"
        placeholder="first name"
        value={first_name}
        onChange={e => setFirstName(e.target.value)}
      />
      <Input
        type="text"
        placeholder="last name"
        value={last_name}
        onChange={e => setLastName(e.target.value)}
      />
      <Input
        type="email"
        placeholder="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <Input
        type="password"
        placeholder="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <Button onClick={registerBtn}>register</Button>
      {/* </form> */}
    </div>
  );
};

export default RegisterRedux;
