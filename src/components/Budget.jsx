import React from 'react';
import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Image,
  Wrap,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
const Budget = () => {
  const budgetIcon = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    w: '150px',
    h: '150px',
    bg: '#9FE3D7',
    borderRadius: '75px',
  };
  return (
    <Box>
      <Grid
        templateColumns="repeat(7, 1fr)"
        gap={0}
        pr="20"
        pl="20"
        pt="5"
        bg="linear-gradient(270.13deg, rgba(78, 154, 141, 0.46) 0.23%, rgba(54, 140, 125, 0.46) 74.81%, rgba(0, 139, 114, 0.46) 100.17%);"
      >
        <GridItem
          ml="20"
          as="main"
          colSpan="2"
          h="10"
          display="flex"
          height="50px"
          width="108px"
          alignItems="center"
          justifyContent="center"
          pb="17px"
        >
          <Link to='/'>
          <Image src={require('../imgs/лого (1).png')} />
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
          <Box color="#26564E" fontSize="20px" fontWeight="700">
            Бюджет
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
          <Box fontSize="20px" fontWeight="700" color="#26564E">
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
          <Box fontSize="20px" fontWeight="700" color="#26564E">
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
          <Box fontSize="20px" fontWeight="700" color="#26564E">
            Транзакции
          </Box>
        </GridItem>
      </Grid>
      <Box ml="130px">
        {/* <Flex direction="column" alignItems="center"> */}
        <Box textAlign="center" pr="100px" mt="30px">
          <Box fontSize="30px" fontWeight="700">
            Бюджеты
          </Box>
          <Box>150 000 сом</Box>
        </Box>
        <Box>
          <Box mt="30px">
            <Box pl="240px" fontSize="30px" mb="30px" fontWeight="700">
              Доходы
            </Box>
            <Flex maxWidth="1200px" justify="space-between" wrap="wrap">
              <Box>
                <Box sx={budgetIcon}>
                  <Image src={require('../BudgetIcons/salary (1) 1.png')} />
                </Box>
                <Box fontWeight="700">Зарплата</Box>
                <Box>50 000 сом</Box>
              </Box>
              <Box>
                <Box sx={budgetIcon} borderRadius="75px">
                  <Image src={require('../BudgetIcons/investment (1) 1.png')} />
                </Box>
                <Box fontWeight="700">Инвестиция</Box>

                <Box>15 000 сом</Box>
              </Box>
              <Box>
                <Box sx={budgetIcon} borderRadius="75px">
                  <Image src={require('../BudgetIcons/piggy-bank 1.png')} />
                </Box>
                <Box fontWeight="700">Накопления</Box>

                <Box>5 000 сом</Box>
              </Box>
              <Box
                w="150px"
                h="150px"
                borderColor="#9FE3D7"
                borderWidth="4px"
                borderRadius="75px"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Image src={require('../BudgetIcons/плюс (2).png')} />
              </Box>
            <Box ml='100px'>
              <Box>
                <Box fontSize='30px'>Общий доход</Box>
                <Box textAlign='center'>80 000 сом</Box>
              </Box>
              <Box>
                <Box fontSize='30px'>Общий расход</Box>
                <Box textAlign='center'>73 000 сом</Box>
              </Box>
            </Box>
            </Flex>
          </Box>
          <Box mt="20px">
            <Box pl="240px" fontSize="30px" mb="30px" fontWeight="700">
              расход
            </Box>
            <Wrap>
              <Flex w="1200px" justify="space-between" wrap="wrap">
                <Box>
                  <Box sx={budgetIcon}>
                    <Image src={require('../BudgetIcons/home 1.png')} />
                  </Box>
                  <Box fontWeight="700">Дом</Box>

                  <Box>8 000 сом</Box>
                </Box>
                <Box>
                  <Box sx={budgetIcon}>
                    <Image
                      src={require('../BudgetIcons//healthy-food (1) 1.png')}
                    />
                  </Box>
                  <Box fontWeight="700">Продукты питания</Box>

                  <Box>5000 сом</Box>
                </Box>
                <Box>
                  <Box sx={budgetIcon}>
                    <Image src={require('../BudgetIcons/textile 1.png')} />
                  </Box>
                  <Box fontWeight="700">Одежды</Box>

                  <Box>5000 сом</Box>
                </Box>
                <Box>
                  <Box sx={budgetIcon}>
                    <Image src={require('../BudgetIcons/transport 1.png')} />
                  </Box>
                  <Box fontWeight="700">Транспорт</Box>

                  <Box>3000 сом</Box>
                </Box>
                <Box>
                  <Box sx={budgetIcon}>
                    <Image src={require('../BudgetIcons/health 1.png')} />
                  </Box>
                  <Box fontWeight="700">Здоровье</Box>

                  <Box>2600 сом</Box>
                </Box>
                <Box
                  w="150px"
                  h="150px"
                  borderColor="#9FE3D7"
                  borderWidth="4px"
                  borderRadius="75px"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Image src={require('../BudgetIcons/плюс (3).png')} />
                </Box>
              </Flex>
            </Wrap>
          </Box>
        </Box>
        {/* </Flex> */}
        {/* ////////////////////////////// */}
        <Box mt="30px" w="600px">
          <Box textAlign="center" fontSize="30px" mb="30px" fontWeight="700">
            Кредиты
          </Box>
          <Flex maxWidth="800px" justify="space-between" wrap="wrap">
            <Box display="flex" alignItems="center" flexDirection="column">
              <Box>
                <Image src={require('../BudgetIcons/optima 1 (1).png')} />
              </Box>
              <Box fontWeight="700">Зарплата</Box>
              <Box>50 000 сом</Box>
            </Box>
            <Box display="flex" alignItems="center" flexDirection="column">
              <Box>
                <Image src={require('../BudgetIcons/м банк 1 (1).png')} />
              </Box>
              <Box fontWeight="700">Инвестиция</Box>

              <Box>15 000 сом</Box>
            </Box>

            <Box display="flex" alignItems="center" flexDirection="column">
              <Image
                pb="15px"
                w="20px"
                src={require('../BudgetIcons/плюс (4).png')}
              />
              <Box fontWeight="700">Категория</Box>
            </Box>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

export default Budget;
