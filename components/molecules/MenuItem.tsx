import React, { ReactNode } from 'react';
import { Text } from '@chakra-ui/react';
import Link from 'next/link';

type MenuItemProps = {
  text: string;
};

const MenuItem: React.FC<MenuItemProps> = ({ text }) => {
  return (
    <Text color={'#888'} fontSize={'18px'}>
      <Link href={`/${text.toLowerCase()}`}>
        <a>{text}</a>
      </Link>
    </Text>
  );
};

export default MenuItem;
