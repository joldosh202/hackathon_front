import React, { useContext, useEffect, useState } from 'react';
import { cardContext } from '../../contexts/CardContextProvider';
import Navbar from '../Navbar/Navbar';
import { Box, Button, useMediaQuery } from '@chakra-ui/react';


const CreateCardPage = () => {
  const { cards, getCards, cardPost } = useContext(cardContext);
  const [isSmallerThan800] = useMediaQuery('(max-width: 700px)')

  const [name, setName] = useState("");
  const [balance, setBalance] = useState(0);
  const [currency, setCurrency] = useState("USD");
  const [color, setColor] = useState("#a0a0a0");
  const [icon, setIcon] = useState("");
  const [accountType, setAccountType] = useState("CARD");

  function toPostCard() {
    const cardInfo = {
      "name": name,
      "balance": +balance,
      "currency": currency,
      "color": color,
      "icon": icon,
      "accountType": accountType
    };

    cardPost(cardInfo)
  }


  useEffect(() => {
    getCards();
  }, []);

  return (
    <div>
      <Navbar/>
      <Box mt="50px"  display='flex' justifyContent='center' flexDirection='column' alignItems='center'>
<Box>

      <input type="text" className='input-card' placeholder='name' value={name} onChange={(e) => setName(e.target.value)} />
      <input type="text" className='input-card' placeholder='balance' value={balance} onChange={(e) => setBalance(e.target.value)} />
      <select name="" id="" value={currency} onChange={(e) => setCurrency(e.target.value)}>
        <option value="USD">USD</option>
        <option value="KZT">KZT</option>
        <option value="JPY">JPY</option>
        <option value="EUR">EUR</option>
        <option value="GBP">GBP</option>
        <option value="CNH">CNH</option>
      </select>
      <select name="" id="" value={accountType} onChange={(e) => setAccountType(e.target.value)}>
        <option value="CASH">Cash</option>
        <option value="CARD">Card</option>
      </select>
      <input type="color" className='input-card' placeholder='color' value={color} onChange={(e) => setColor(e.target.value)} />
      <input type="text" className='input-card' placeholder='icon' value={icon} onChange={(e) => setIcon(e.target.value)} />
</Box>
<Box>

      <Button mt='40px' h='55px' bg='#EBBB55' w= {isSmallerThan800 ? '250px' : '437px'} mb='40px'  onClick={toPostCard}>Post</Button>
</Box>
      </Box>
    </div>
  );
};

export default CreateCardPage;