import { HStack, Image, Text } from '@chakra-ui/react';

import logoLittleGrey from '../images/LogoLittleGrey.png';

const Footer = () => {
  return (
    <footer>
      <HStack
        h='100px'
        px='15px'
        justify='space-between'
        backgroundColor='#EDEFEE'
      >
        <Image src={logoLittleGrey} h='80px' p='2px' />
        <Text
          color='#495E57'
          fontFamily='karla'
          fontSize='18px'
          fontWeight='bold'
        >
          Copyright Little Lemon 2023
        </Text>
      </HStack>
    </footer>
  );
};

export default Footer;
