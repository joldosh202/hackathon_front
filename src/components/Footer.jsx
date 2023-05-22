import { Box, Breadcrumb, Button, Flex, Image, useMediaQuery } from '@chakra-ui/react';
import React from 'react';

const Footer = () => {
   const button = {
      bg: '#EBBB55',
      pl: '5px',
      pr: '5px',
      borderRadius: "5px",
      w: "140px"
   }
  const [isSmallerThan800] = useMediaQuery('(max-width: 1300px)')

   return (
      <Box w='100%' height='1100px' bg='linear-gradient(285.73deg, #368C7D 53.87%, #FFFFFF 105.28%);'>
         <Box display='flex' justifyContent='center'alignItems='center' flexDirection='column'>
            <Box color='white' fontSize="35px" mb='50px'>Транзакции</Box>
            <Box mb='50px' display='flex' justifyContent='space-between' width='80%'>

               <Image w={isSmallerThan800 ? '270px' : '420px'} height={isSmallerThan800 ? "270px" : '420px'}  src={require("../imgs/диаграмма.png")}/>
               {isSmallerThan800 ? null : 
               <Image src={require("../imgs/транз2.png")}/>
               }
            </Box>
            <Flex wrap='wrap' justify='space-between' w="70%" mb="50px">
               <Button sx={button}>Добавить</Button>
               <Button sx={button}>Удалить</Button>
               <Button sx={button}>Редактировать</Button>
            </Flex>
         </Box>
         <Box w='100%' h='1px' bg="white">

         </Box>
         <Flex mt="60px" justify='center'>

         <Flex wrap='wrap' w="1200px" justify='space-between'>
            <Box>
               <Image src={require('../imgs/лого (1).png')}/>
            </Box>
            <Box>
               <Box>о компании</Box>
               <Box>Информация</Box>
            </Box>
            <Box>
            <Box>Отзывы пользователей</Box>
            <Box>Помощь</Box>
               
            </Box>
            <Box>
            <Box>По вопросам клиентов</Box>
            <Box>+996773564321</Box>
            <Box>Предложения и сотрудничество</Box>
            <Box>smart@gmail.com</Box>
               
            </Box>
         </Flex>
         </Flex>
         <Flex ml={isSmallerThan800 ? "10px": '150px'}  mt='30px'>
            <Image src={require('../imgs/Frame 19.png')}/>
         </Flex>
      </Box>
   );
};

export default Footer;