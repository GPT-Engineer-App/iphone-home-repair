import { Container, VStack, Text, Button, Box, Flex } from "@chakra-ui/react";
import { FaPhoneAlt } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Box as="section" position="relative" height="100vh" overflow="hidden">
        <Box as="video" autoPlay loop muted width="100%" height="100%" objectFit="cover">
          <source src="GPTENG:get_video('iphone repair')" type="video/mp4" />
          Your browser does not support the video tag.
        </Box>
        <Flex position="absolute" top="0" left="0" width="100%" height="100%" bg="rgba(0, 0, 0, 0.5)" align="center" justify="center">
          <VStack spacing={4} color="white" textAlign="center">
            <Text fontSize="4xl" fontWeight="bold">
              iPhone Home Repair Service
            </Text>
            <Text fontSize="xl">Fast, Reliable, and Convenient iPhone Repairs at Your Doorstep</Text>
            <Button colorScheme="teal" size="lg" leftIcon={<FaPhoneAlt />}>
              Call Us Now
            </Button>
          </VStack>
        </Flex>
      </Box>
    </Container>
  );
};

export default Index;
