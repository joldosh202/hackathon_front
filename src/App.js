import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import MainRoutes from './MainRoutes';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <MainRoutes />
    </ChakraProvider>
  );
}

export default App;
