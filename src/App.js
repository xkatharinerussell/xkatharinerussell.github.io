import logo from './logo.svg';
import './App.css';
import { Box, Menu, VStack, HStack, Flex, Heading, IconButton, useColorMode, Spacer } from '@chakra-ui/react';
import { FaSun, FaMoon, FaEnvelope, FaGithub, FaLinkedinIn } from 'react-icons/fa';

import Nav from './Nav';

function App() {

  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <VStack>
      <Nav></Nav>
      
      <Box p={40}>
        <Heading color="orange.400" fontSize="7em">Hi I'm Katharine, a software engineer in Sydney.</Heading>
      </Box>

      <HStack alignItems={'center'} spacing={10}>
        <IconButton icon={<FaEnvelope />} isRound="true" size="lg"></IconButton>
        <IconButton icon={<FaGithub />} isRound="true" size="lg"></IconButton>
        <IconButton icon={<FaLinkedinIn />} isRound="true" size="lg"></IconButton>
      </HStack>

    </VStack>
  );
}

export default App;
