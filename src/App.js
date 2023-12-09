import './App.css';
import { Box, ChakraProvider, VStack } from '@chakra-ui/react';
import { Routes, Route } from 'react-router-dom';

import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Reserve from './components/Reserve';
import ReserveSuccess from './components/ReserveSuccess';
import { ReservationDataProvider } from './context/reservationDataContext';

function App() {
  return (
    <>
      <ChakraProvider>
        <ReservationDataProvider>
          <VStack minH='100vh' align='stretch'>
            <Header />
            <Box flex='1'>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/reserve-a-table' element={<Reserve />} />
                <Route
                  path='/reservation-successful'
                  element={<ReserveSuccess />}
                />
              </Routes>
            </Box>
            <Footer />
          </VStack>
        </ReservationDataProvider>
      </ChakraProvider>
    </>
  );
}

export default App;
