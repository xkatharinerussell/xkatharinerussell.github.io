import { ReactNode } from 'react';

import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  useDisclosure,
  useColorModeValue,
  useColorMode,
  Stack,
} from '@chakra-ui/react';

import { Link as ReactLink } from "react-router-dom";
import { FaAlignJustify, FaTimes, FaSun, FaMoon } from 'react-icons/fa';

const Links = [['Home', '/dev-profile/'], ['About', '#'], ['Resume',"/dev-profile/resume"]];

const NavLink = (props) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    fontSize="1.3em"
    fontWeight="bold"
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    as={ReactLink}
    to={props.address}>
    {props.children}
  </Link>
);

function Nav() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  // Darkmode
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <>
      <Box bg={useColorModeValue('gray.50', 'gray.900')} w="100%" px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <FaTimes /> : <FaAlignJustify />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <HStack
              as={'nav'}
              spacing={6}
              display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
                <NavLink key={link[0]} address={link[1]}>{link[0]}</NavLink>
              ))}
            </HStack>
            <IconButton icon={isDark?<FaSun />:<FaMoon />} isRound="true" onClick={toggleColorMode}></IconButton>
          </HStack>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link[0]} address={link[1]}>{link[0]}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>

    </>
  );
}

export default Nav;