import { Box, Button,Flex,Grid,GridItem,IconButton,
   Image,
   Menu,
   MenuButton,
   MenuItem,
   MenuList, Select, useMediaQuery } from '@chakra-ui/react';
 import React, { useEffect, useState } from 'react';
 import { useDispatch, useSelector } from 'react-redux';
 import { Link, useParams } from 'react-router-dom';
 import { updateBal } from '../../store/CardAccSlice';
 
 import { getOneCard } from '../../store/CardAccSlice';
 import { HamburgerIcon } from '@chakra-ui/icons';
import Navbar from '../Navbar/Navbar';
import { getOneLoan, loanActivity } from '../../store/loanSlice';
 
 const OneLoan = () => {
    const [condition, setCond] = useState(true)
    const data = useSelector((state)  => state.loan.oneLoan)
    const [isSmallerThan800] = useMediaQuery('(max-width: 1100px)')
    useEffect(() => {
       getOne()
    },[])
    const dispatch = useDispatch()
    const params = useParams()
    const id1 = params.id 
    const id = Number(id1)
    console.log(id);
    const getOne = async () => {
      await dispatch(
        getOneLoan(
          id,
          
        )
      );
    };
    const activity = async () => {
      await dispatch(
        loanActivity(
         {

            id,
            condition,
         }
        )
      );
    };

    
    console.log(data);
    if (!data) {
       return <div>Loading...</div>; // Render a loading state while data is being fetched
     }
     const font = {
      fontSize: "23px",
      mb: "10px"
    }
    return (
 <Box>
 <Navbar/>
     <Box p='20px' >
      <Box borderWidth='3px' borderColor="#EBBB55" width='90%' pl={isSmallerThan800 ? '15px' : '100px'} pb='40px' pt='50px' ml={isSmallerThan800 ? '15px' : '100px'} mt='50px'>

       <Box sx={font}>Имя: { data.data && data.data.name}</Box>
       <Box sx={font}>Задолжность: {data.data && data.data.indebtedness}</Box>
       <Box sx={font}>Валюта: {data.data && data.data.currency}</Box>
       {/* <Link to={`/updatebalance/${id}`}>
         <Button >update balance</Button>
        </Link> */}
       <Link to={`/repayloan/${id}`}>
         <Button bg="#EBBB55" mr='10px' >Погасить</Button>
       </Link>
        </Box>
       {/* <Link to={`/incloan/${id}`}>
         <Button >increase loan</Button>
       </Link> */}
       {/* ///////////////// */}
       {/* <Select>
         <option value={condition}>
            active
         </option>
         <option value={condition} onChange={() => setCond(false)}>
            unactive
         </option>
       </Select>
       <Button onClick={activity}>
         set activity
       </Button> */}
       {/* <Link to={`/transfercard/${id}`}>
         <Button >transfer</Button>
       </Link> */}
     </Box>
 </Box>
    );
 };
 
 export default OneLoan;