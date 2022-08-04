import React from 'react';
import { Button, Flex, HStack, Text } from '@chakra-ui/react';
import MenuItem from '../molecules/MenuItem';
import Link from 'next/link';

const TopBar = () => {
  return (
    <Flex
      w={'100%'}
      flexDirection={'row'}
      alignContent={'center'}
      p={'8px 16px'}
    >
      <Text
        fontSize={'36px'}
        fontWeight={'bold'}
        lineHeight={'42px'}
        color={'brand.900'}
        flexGrow={1}
      >
        App
      </Text>
      <HStack spacing={'16px'} alignContent={'center'}>
        <MenuItem text={'Blog'} />
        <MenuItem text={'Product'} />
        <MenuItem text={'Pricing'} />
      </HStack>
      <Flex marginLeft={'82px'}>
        <Button variant={'solid'} colorScheme={'blue'}>
          Get Started
        </Button>
      </Flex>
    </Flex>
  );
};

export default TopBar;
