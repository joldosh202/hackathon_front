import {
  Box,
  Button,
  Card,
  CardBody,
  Flex,
  Grid,
  GridItem,
  Image,
  Text,
} from '@chakra-ui/react';
import React from 'react';

const Home = () => {
  const categStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };
  return (
    <Box>
      <Box
        bg="radial-gradient(96.05% 397.61% at 123.3% -27.36%, #EBBB55 0%, #546762 91.26%, #465F63 100%)"
        w="100%"
        h="650"
      >
        <Grid templateColumns="repeat(10, 1fr)" gap={0} pr="20" pl="20" pt="10">
          <GridItem
            ml="5"
            as="main"
            colSpan="2"
            h="10"
            display="flex"
            height="50px"
            width="108px"
          >
            <Image src={require('../imgs/лого.png')} />
          </GridItem>
          <GridItem
            display="flex"
            alignItems="center"
            as="aside"
            colSpan="1"
            justifyContent="center"
            h="10"
          >
            <Box color="white" fontSize="18">
              Счет
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
            <Box color="white" fontSize="18">
              Бюджет
            </Box>
          </GridItem>
          <GridItem
            display="flex"
            alignItems="center"
            as="aside"
            justifyContent="center"
            colSpan="2"
            h="10"
          >
            <Box color="white" fontSize="18">
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
            <Box color="white" fontSize="18">
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
            <Box color="white" fontSize="18">
              Транзакции
            </Box>
          </GridItem>
          <GridItem
            as="aside"
            colSpan="2"
            h="10"
            display="flex"
            justifyContent="center"
          >
            <Image
              src={require('../imgs/free-icon-settings-945147-removebg-preview 1.png')}
            />
          </GridItem>
          <Box
            right="300px"
            top="100px"
            position="absolute"
            fontSize="20"
            color="yellow"
          >
            Вход
          </Box>
        </Grid>
        <Box>
          <Flex justify="space-between">
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="space-between"
              h="300px"
              ml="100px"
              mt="20"
            >
              <Box>
                <Box color="white" w="500px" fontSize={43}>
                  Управление личными финансами
                </Box>
                <Box color="white" w="400px" fontSize={25}>
                  Отслеживание своих расходов и доходов
                </Box>
              </Box>
              <Box mt="">
                <Button colorScheme="yellow" pl="25px" pr="25px">
                  Создать счет
                </Button>
              </Box>
            </Box>
            <Box>
              {/* <Box
                ml="400px"
                mt="10px"
                position="absolute"
                fontSize="20"
                color="yellow"
              >
                Вход
              </Box> */}
              <Image w="800px" src={require('../imgs/фото главный.png')} />
            </Box>
          </Flex>
        </Box>
      </Box>
      {/* ////////budget////////// */}
      <Box mt="10" pb="30px">
        <Image
          position="absolute"
          src={require('../imgs/image 31 (1)-PhotoRoom 4.png')}
        />
        <Flex justify="space-around">
          <Box>
            <Box sx={categStyles}>
              <Box fontSize="30">Бюджеты</Box>
              <Box fontSize="20">150 000 som</Box>
              <Image src={require('../imgs/image 32.png')} />
            </Box>
            <Box>
              <Box textAlign="center" fontSize="30" mb="5">
                Кредиты
              </Box>
              <Box display="flex" w="400px" justifyContent="space-between">
                <Box sx={categStyles}>
                  <Image src={require('../imgs/optima 1.png')} />
                  <Box>Оптима Банк</Box>
                </Box>
                <Box>
                  <Image src={require('../imgs/мбанк 1.png')} />
                  <Box>Мбанк</Box>
                </Box>
                <Box
                  display="flex"
                  flexDirection="column"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Image mt="3" w="30px" src={require('../imgs/плюс.png')} />
                  <Box>Категория</Box>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box>
            <Card border="1px" w="470px" mb="10">
              <CardBody>
                <Box
                  w="100px"
                  h="100px"
                  bgColor="yellow.300"
                  boxShadow=" 0px 4px 4px rgba(0, 0, 0, 0.25);"
                  borderRadius="50%"
                  top="20px"
                  justifyContent="center"
                  alignItems="center"
                  right="450px"
                  position="absolute"
                  display="flex"
                  flexDirection="column"
                >
                  90000 сом
                  <Image src={require('../imgs/плюс.png')} />
                </Box>
                <Box textAlign="center" fontSize="30" mb="3">
                  доходы
                </Box>
                <Box display="flex" justifyContent="space-between">
                  <Box sx={categStyles}>
                    <Image w="53px" src={require('../imgs/paycheck 1.png')} />
                    <Box>Зарплата</Box>
                  </Box>
                  <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                  >
                    <Image w="53px" src={require('../imgs/investment 1.png')} />
                    <Box>Инвестиции</Box>
                  </Box>
                  <Box
                    display="flex"
                    flexDirection="column"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Image mt="3" w="30px" src={require('../imgs/плюс.png')} />
                    <Box>Категория</Box>
                  </Box>
                </Box>
              </CardBody>
            </Card>
            <Card border="1px">
              <CardBody>
                <Box
                  w="100px"
                  h="100px"
                  bgColor="yellow.300"
                  boxShadow=" 0px 4px 4px rgba(0, 0, 0, 0.25);"
                  borderRadius="50%"
                  top="74px"
                  justifyContent="center"
                  alignItems="center"
                  right="450px"
                  position="absolute"
                  display="flex"
                  flexDirection="column"
                >
                  85 000 сом
                  <Image src={require('../imgs/Line 2.png')} />
                </Box>
                <Box textAlign="center" fontSize="30" mb="3">
                  расходы
                </Box>
                <Box display="flex" justifyContent="space-between">
                  <Box sx={categStyles}>
                    <Image
                      w="53px"
                      src={require('../imgs/house-black-silhouette-without-door 1.png')}
                    />
                    <Box>Дом</Box>
                  </Box>
                  <Box sx={categStyles}>
                    <Image w="53px" src={require('../imgs/grocery 1.png')} />
                    <Box>Продукты питания</Box>
                  </Box>
                  <Box
                    display="flex"
                    flexDirection="column"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Image
                      w="53px"
                      mt="3"
                      src={require('../imgs/hanger1.png')}
                    />
                    <Box>Одежда</Box>
                  </Box>
                </Box>
                <Box display="flex" justifyContent="space-between">
                  <Box sx={categStyles}>
                    <Image
                      w="53px"
                      src={require('../imgs/healthy-lifestyle-logo 1.png')}
                    />
                    <Box>Здоровье</Box>
                  </Box>
                  <Box sx={categStyles}>
                    <Image
                      w="53px"
                      src={require('../imgs/public-transport 1.png')}
                    />
                    <Box>Транспорт</Box>
                  </Box>
                  <Box
                    display="flex"
                    flexDirection="column"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Image mt="3" w="30px" src={require('../imgs/плюс.png')} />
                    <Box>Категория</Box>
                  </Box>
                </Box>
              </CardBody>
            </Card>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default Home;
