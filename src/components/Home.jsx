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
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useMediaQuery,
} from '@chakra-ui/react';
import React from 'react';
import FinTarget from './FinTarget';
import { Link } from 'react-router-dom';
import StatsHome from './StatsHome';
import { HamburgerIcon } from '@chakra-ui/icons';
import Footer from './Footer';
const Home = () => {
  const categStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const [isSmallerThan800] = useMediaQuery('(max-width: 1400px)')
  
  return (
    <Box>
      <Box
        // bg="radial-gradient(96.05% 397.61% at 123.3% -27.36%, #EBBB55 0%, #546762 91.26%, #465F63 100%)"
        w="100%"
        h="650"
      >
       {isSmallerThan800 ? <Menu >
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
            <Image src={require('../imgs/лого (1).png')} />
          </Box>
  <MenuButton
    as={IconButton}
    aria-label='Options'
    icon={<HamburgerIcon />}
    variant='outline'
  />
  <MenuList>
    <MenuItem >
    <Link to="/budget">
      
    Бюджет
    </Link>
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
    <Link to='/register'>
    <MenuItem>
            
              Регистрация
    </MenuItem>
              </Link>
    <Link to='/login'>
    <MenuItem>
         Вход           
    </MenuItem>
       </Link>
  </MenuList>
</Box>
</Menu>
:
        <Grid templateColumns="repeat(7, 1fr)" gap={0} pr="20" pl="20" pt="5">
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
            <Image src={require('../imgs/лого (1).png')} />
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
            <Box className='testing' fontSize="20px" fontWeight="700">
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
            <Link to='/register'>
              <Button
                colorScheme="yellow"
                w="163px"
                h="39px"
                borderRadius="20px"
                fontSize="20px"
                fontWeight="500"

              >
                Регистрация
              </Button>
            </Link>
          </GridItem>
          <GridItem
            as="aside"
            colSpan="1"
            h="10"
            display="flex"
            alignItems="center"
            justifyContent="center"
            >
            <Link to='/login'>
              <Button
                colorScheme="yellow"
                w="111px"
                h="39px"
                borderRadius="20px"
                fontSize="20px"
                fontWeight="500"
              >
                Вход
              </Button>
            </Link>
          </GridItem>
        </Grid>
        }
        <Box> 
          <Image
            // position="absolute"
            w="100%"
            
            h={isSmallerThan800 ? '500px' : null}
            src={require('../imgs/Rectangle 80.png')}
          />
        </Box>
        <Box position="absolute" top="100px">
          <Flex justify="space-between">
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="space-between"
              h="300px"
              ml={isSmallerThan800 ? '50px' : '130px'}
              mt="20"
              w={isSmallerThan800 ? '400px' : "500px"}
            >
              <Box>
                <Box  fontSize={43} color="white">
                  Управление личными финансами
                </Box>
                <Box fontSize={25} color="white">
                  Стройте свои бюджеты легко и просто в несколько шагов
                </Box>
              </Box>
              <Box mt="">
                <Link to='/cashlist'>
                  <Button
                    colorScheme="yellow"
                    w="223px"
                    h="39px"
                    borderRadius="20px"
                    fontWeight="700"

                  >
                    Создать счет
                  </Button>
                </Link>
              </Box>
            </Box>
          </Flex>
        </Box>
        {/* ///////////////////// */}
        <Box >
          {
            isSmallerThan800 ? 
            null
            :
            <Box>

          <Image
            position="absolute"
            left="700px"
            top="250px"
            src={require('../imgs/Arrow 6.png')}
            zIndex="10"
          />
          <Image
          position="absolute"
            right="150px"
            top="100px"
            src={require('../imgs/Ellipse 45.png')}
          />
          <Image
            position="absolute"
            top="150px"
            right="190px"
            src={require('../imgs/Group 47.png')}
          />
          <Image
            position="absolute"
            left="650px"
            top="360px"
            src={require('../imgs/Group 43.png')}
          />
          <Box position="absolute"
            left="658px"
            top="396px">

          <Image 
            src={require('../imgs/Group 37.png')}/>
            </Box>
          <Image
            position="absolute"
            left="780px"
            top="270px"
            src={require('../imgs/Group 42.png')}
            />
          <Image
            position="absolute"
            left="970px"
            top="240px"
            src={require('../imgs/Group 87.png')}
            />
            </Box>
        }
        </Box>
        {/* ///////////////////////// */}
      </Box>

      {/* ////////budget////////// */}
      <Box pl="100px" pr="100px" pb="50px">
        <Flex justify="space-between" wrap='wrap'>
          <Box
            // display="flex"
            // flexDirection="column"
            // justifyContent="space-between"
            // height="120px"
            ml="50px"
          >
            <Box fontSize="30px" fontWeight="700">
              Бюджеты
            </Box>
            <Box fontWeight="600" w="200px" mt="10px">
              Накопите на мечту контролируя бюджет
            </Box>
            <Button
              colorScheme="yellow"
              mt="25px"
              w="201px"
              h="39px"
              borderRadius="20px"
            >
              Подробнее
            </Button>
          </Box>
          <Box display="flex" w="720px" flexWrap='wrap' justifyContent='center'>
            <Box w="200px">
              {isSmallerThan800 ? null :
              <Box
              position="absolute"
                top="520px"
                h="123px"
                bg="black"
                w="2px"
                right="735px"
              ></Box>
              }
            
              <Image src={require('../imgs/бюджет 1стр.png')} />
              <Box fontSize="22px">Кредиты</Box>
              <Box>Узнать, сколько вам одобрит банк</Box>
            </Box>
            <Box mt="30px" w="200px">
              <Box
                display="flex"
                justifyContent="center"
                flexDirection="column"
              >
                {isSmallerThan800 ? null :
                <Box
                position="absolute"
                  top="497px"
                  h="173px"
                  bg="black"
                  w="2px"
                  right="540px"
                ></Box>
              }
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="42"
                  height="42"
                  viewBox="0 0 14 14"
                >
                  <g
                    fill="none"
                    stroke="#008b72"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <ellipse cx="9" cy="5.5" rx="4.5" ry="2" />
                    <path d="M4.5 5.5v6c0 1.1 2 2 4.5 2s4.5-.9 4.5-2v-6" />
                    <path d="M13.5 8.5c0 1.1-2 2-4.5 2s-4.5-.9-4.5-2m4.4-7A6.77 6.77 0 0 0 5 .5C2.51.5.5 1.4.5 2.5c0 .59.58 1.12 1.5 1.5" />
                    <path d="M2 10C1.08 9.62.5 9.09.5 8.5v-6" />
                    <path d="M2 7C1.08 6.62.5 6.09.5 5.5" />
                  </g>
                </svg>
              </Box>
              <Box fontSize="22px">Доходы</Box>
              <Box>Отслеживайте свои доходы</Box>
            </Box>
            <Box mt="50px" w="200px">
            {isSmallerThan800 ? null :

              <Box
                position="absolute"
                top="483px"
                h="210px"
                bg="black"
                w="2px"
                right="335px"
              ></Box>
            }
              <Image src={require('../imgs/Frame 8.png')} />
              <Box fontSize="22px">Расходы</Box>
              <Box>Держите свой денежный поток кристально чистым</Box>
            </Box>
          </Box>
        </Flex>
      </Box>
      <FinTarget />
      <StatsHome />
      <Footer/>
    </Box>
  );
};

export default Home;
