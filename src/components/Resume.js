import {
    Box,
    Container,
    Heading,
    SimpleGrid,
    Icon,
    Text,
    Stack,
    HStack,
    VStack,
    StackDivider
  } from '@chakra-ui/react';

  import { FaCarrot } from 'react-icons/fa';
//   import { CheckIcon } from '@chakra-ui/icons';
  
  // Replace test data with your own
  const features = Array.apply(null, Array(2)).map(function (x, i) {
    return {
      id: i,
      title: 'Lorem ipsum dolor sit amet',
      text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.',
    };
  });
  
  export default function Resume() {
    return (
      <Box p={4}>
        <Stack spacing={4} as={Container} maxW={'5xl'} textAlign={'center'}>
          <Text bgGradient="linear(to-r, purple.600, pink.600, orange.400)" bgClip='text' fontSize={'5xl'}>Dev Experience</Text>
          <Text color={'gray.600'} fontSize={'xl'}>
            I'm a software engineer who is passionate about building quality products and solving problems. Learning new technologies and working with uncertainty is part of my typical day.
          </Text>
        </Stack>

        <SimpleGrid pt={10} columns={2} spacing={5}>
            <Box bg="tomato" height="100px">
                <Text>Job 1</Text>
            </Box>
            <Box bg="tomato" height="80px"></Box>
            <Box bg="tomato" height="80px"></Box>
            <Box bg="tomato" height="80px"></Box>
            <Box bg="tomato" height="80px"></Box>
        </SimpleGrid>

        {/* {features.map((feature) => (
        <VStack key={feature.id} divider={<StackDivider borderColor="gray.200" />}>

            <Text fontWeight={600}>{feature.title}</Text>
            <Text color={'gray.600'}>{feature.text}</Text>
        </VStack>
        ))} */}
  
        {/* <Container maxW={'6xl'} mt={10}>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
            {features.map((feature) => (
              <HStack key={feature.id} align={'top'}>
                <Box color={'orange.400'} px={2}>
                  <Icon as={FaCarrot} />
                </Box>
                <VStack align={'start'}>
                  <Text fontWeight={600}>{feature.title}</Text>
                  <Text color={'gray.600'}>{feature.text}</Text>
                </VStack>
              </HStack>
            ))}
          </SimpleGrid>
        </Container> */}
      </Box>
    );
  }