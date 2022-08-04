import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { Container, Flex, Text, HStack, Button } from '@chakra-ui/react';
import MenuItem from '../components/molecules/MenuItem';
import Link from 'next/link';
import Hero from '../components/molecules/Hero';
import TopBar from '../components/organisms/TopBar';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Prisma in NextJS App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TopBar />
      <Flex>
        <Hero />
      </Flex>
    </div>
  );
};

export default Home;
