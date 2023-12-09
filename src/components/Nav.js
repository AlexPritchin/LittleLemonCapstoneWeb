import { HStack, Link as ChakraLink } from '@chakra-ui/react';
import { Link as ReactRouterLink } from 'react-router-dom';

const Nav = () => {
  return (
    <nav>
      <HStack spacing={10} color='white' fontFamily='karla' fontSize='22px'>
        <ChakraLink
          as={ReactRouterLink}
          to='/'
          color='#495E57'
          _hover={{
            color: '#F4CE14',
          }}
          fontWeight='bold'
        >
          Home
        </ChakraLink>
        <ChakraLink
          as={ReactRouterLink}
          to='/reserve-a-table'
          color='#495E57'
          _hover={{
            color: '#F4CE14',
          }}
          fontWeight='bold'
        >
          Reserve a table
        </ChakraLink>
      </HStack>
    </nav>
  );
};

export default Nav;
