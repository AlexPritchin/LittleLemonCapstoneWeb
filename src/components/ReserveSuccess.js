import {
  Heading,
  Image,
  Link as ChakraLink,
  Text,
  VStack,
} from '@chakra-ui/react';
import { Link as ReactRouterLink } from 'react-router-dom';

import { useReservationDataContext } from '../context/reservationDataContext';
import chef from '../images/Chef.jpg';

const ReserveSuccess = () => {
  const { reservationString } = useReservationDataContext();

  return (
    <VStack pt='40px' pb='80px' px='20px'>
      <Heading size='3xl' color='#F4CE14' fontFamily='Markazi'>
        Congratulations
      </Heading>
      <Heading mt='20px' fontFamily='Markazi'>
        Your reservation is successful
      </Heading>
      <Text mt='50px' fontFamily='karla' fontSize='22px'>
        You reserved {reservationString}
      </Text>
      <Text mt='20px' fontFamily='karla' fontSize='22px'>
        Have a good time at our restaurant. We're waiting for you.
      </Text>
      <Image
        src={chef}
        mt='40px'
        w={['80vw', '80vw', '60vw', '60vw', '40vw']}
        borderRadius='20px'
      />
      <ChakraLink
        as={ReactRouterLink}
        to='/'
        color='black'
        _hover={{}}
        fontFamily='karla'
        fontSize='22px'
        fontWeight='bold'
        backgroundColor='#F4CE14'
        borderRadius='28px'
        px='84px'
        py='12px'
        mt='6vh'
      >
        Back to Home
      </ChakraLink>
    </VStack>
  );
};

export default ReserveSuccess;
