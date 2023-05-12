import { Input } from '@chakra-ui/react';
import React, { useState } from 'react';
import { login } from '../store/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../store/authSlice';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { user } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  console.log(user);

  const loginBtn = async () => {
    await dispatch(
      login({
        email,
        password,
      })
    );
  };
  function check() {
    console.log(user);
  }

  return (
    <div>
      <div>login</div>

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

      <button onClick={loginBtn}>login </button>
      <button onClick={check}> check</button>
    </div>
  );
};

export default Login;
