import { Box, VStack, HStack, IconButton, Text } from '@chakra-ui/react';
import { FaSun, FaMoon, FaEnvelope, FaGithub, FaLinkedinIn } from 'react-icons/fa';

export default function Home() {
    return (
        <VStack>
            <Box p={40}>
                <Text align="center" fontSize="8xl" fontWeight="bold" bgGradient="linear(to-r, purple.600, pink.600, orange.400)" bgClip='text' >Hi I'm Katharine, a software engineer in Sydney.</Text>
            </Box>

            <HStack pt={10} alignItems={'center'} spacing={10} >
                <IconButton as="a" href="https://github.com/xkatharinerussell" icon={<FaEnvelope />} isRound="true" size="lg" ></IconButton>
                <IconButton as="a" href="https://github.com/xkatharinerussell" icon={<FaGithub />} isRound="true" size="lg"></IconButton>
                <IconButton as="a" href="https://www.linkedin.com/in/xkatharinerussell/" icon={<FaLinkedinIn />} isRound="true" size="lg"></IconButton>
            </HStack>
        </VStack>
    );
}