import { HStack, Image } from '@chakra-ui/react';

import Nav from './Nav';
import logo from '../images/Logo.svg';

const Header = () => {
  return (
    <header>
      <HStack
        h='100px'
        pl='50px'
        pr='15px'
        justify='space-between'
        backgroundColor='#EDEFEE'
      >
        <Image src={logo} h='50px' />
        <Nav />
      </HStack>
    </header>
  );
};

export default Header;
