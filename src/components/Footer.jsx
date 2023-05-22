import { Box, Button, Image } from '@chakra-ui/react';
import React from 'react';

const Footer = () => {
   return (
      <Box w='100%' height='1100px' bg='linear-gradient(285.73deg, #368C7D 53.87%, #FFFFFF 105.28%);'>
         <Box>
            <Box></Box>
            <Box display='flex'>
               <Image src={require("../imgs/диаграмма.png")}/>
               <Image src={require("../imgs/транз2.png")}/>
            </Box>
            <Box>
               <Button>Добавить</Button>
               <Button>Удалить</Button>
               <Button>Редактировать</Button>
            </Box>
         </Box>
      </Box>
   );
};

export default Footer;