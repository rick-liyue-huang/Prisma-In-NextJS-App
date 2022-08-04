import React from 'react';
import { Container, Flex, Heading, Text } from '@chakra-ui/react';

const Hero = () => {
  return (
    <Flex
      w={'100%'}
      background={
        'linear-gradient(217deg, rgba(255,0,0,.8), rgba(255,0,0,0) 70.71%),\n' +
        '            linear-gradient(127deg, rgba(0,255,0,.8), rgba(0,255,0,0) 70.71%),\n' +
        '            linear-gradient(336deg, rgba(0,0,255,.8), rgba(0,0,255,0) 70.71%)'
      }
      color={'whitesmoke'}
    >
      <Container py={'64px'}>
        <Heading>Making better Productivity on App</Heading>
        <Text
          mt={'16px'}
          fontSize={'30px'}
          lineHeight={'64px'}
          color={'gray.200'}
        >
          Prisma on NextJS
        </Text>
      </Container>
    </Flex>
  );
};

export default Hero;
