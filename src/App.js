import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import MainRoutes from './MainRoutes';
import CardContextProvider from './contexts/CardContextProvider';

function App() {
  return (
    <CardContextProvider>
      <ChakraProvider theme={theme}>
        <MainRoutes />
      </ChakraProvider>
    </CardContextProvider>
  );
}

export default App;
