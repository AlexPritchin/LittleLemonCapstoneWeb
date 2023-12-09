import {
  Heading,
  Image,
  Link as ChakraLink,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import { Link as ReactRouterLink } from 'react-router-dom';

import twoChefs from '../images/TwoChefs.jpg';

const Home = () => {
  return (
    <main>
      <VStack minH='77vh' justify='center' align='center'>
        <Stack
          direction={['column', 'column', 'column', 'column', 'row']}
          w='80vw'
          minH='50vh'
          pl='20px'
          pt='30px'
          pr='20px'
          pb='20px'
          align='flex-start'
          backgroundColor='#495E57'
          borderRadius='20px'
        >
          <VStack align='flex-start' pr='50px'>
            <Heading size='4xl' color='#F4CE14' fontFamily='Markazi'>
              Little Lemon
            </Heading>
            <Heading size='2xl' color='white' fontFamily='Markazi'>
              Chicago
            </Heading>
            <Text mt='30px' color='white' fontFamily='karla' fontSize='30px'>
              We are a family owned Mediterranean restaurant, focused on
              traditional recipes served with a modern twist.
            </Text>
            <ChakraLink
              as={ReactRouterLink}
              to='/reserve-a-table'
              color='black'
              _hover={{}}
              fontFamily='karla'
              fontSize='22px'
              fontWeight='bold'
              backgroundColor='#F4CE14'
              borderRadius='28px'
              px='28px'
              py='12px'
              mt='6vh'
            >
              Reserve a table
            </ChakraLink>
          </VStack>
          <Image
            src={twoChefs}
            w={['100%', '100%', '100%', '100%', '45%']}
            borderRadius='20px'
            mt={['20px', '20px', '20px', '20px', '0px']}
          />
        </Stack>
      </VStack>
    </main>
  );
};

export default Home;
