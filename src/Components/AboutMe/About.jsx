import { Box, Text, Divider, SimpleGrid, Stack } from "@chakra-ui/layout";
import { Button, Image } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  return (
    <Box
      minH="100vh"
      w="100%"
      pt={20}
      backgroundColor="whitesmoke"
      id="about"
      d="flex"
      flexDir="column"
      alignItems="center"
      px={{ md: "5" }}
    >
      <Text mt={10} fontSize="3xl" fontFamily="heading" fontWeight="bold">
        About Me
      </Text>
      <Divider mt={5} width={200} orientation="horizontal" />
      <Box
        d="flex"
        mt={10}
        mb={10}
        backgroundColor="white"
        boxShadow="dark-lg"
        maxW={{ base: "90%", md: "90%", lg: "60%" }}
      >
        <SimpleGrid columns={{ base: "1", md: "2" }} spacing={10}>
          <Box
            d="flex"
            alignItems="center"
            justifyContent="center"
            maxBlockSize={{ base: "xs", md: "sm" }}
            mx="auto"
            mt={10}
            mb={10}
            p={30}
          >
            <Image src={require("../../asset/images/about.png")} />
          </Box>

          <Box d="flex" flexDir="column" p={30}>
            <Text textAlign="justify" alignItems="center" fontSize="lg">
              Hi, I’m Priyal Patel, a Master of Applied Computing student with a focus on Artificial Intelligence, driven by a deep interest in leveraging AI and machine learning to solve real-world problems. With experience in developing intelligent systems, I specialize in designing and implementing solutions that harness the power of data to deliver impactful insights. My expertise includes:
              <br></br>
            </Text>
            <ul>
              <li>
                <Text fontSize="lg">
                  Data Structures and Algorithm
                </Text>
              </li>
              <li>
                <Text fontSize="lg">
                  Solving complex problems with innovative approaches
                </Text>
              </li>
              <li>
                <Text fontSize="lg">
                  Artificial Intelligence and Machine Learning
                </Text>
              </li>
              <li>
                <Text fontSize="lg">
                  Creating scalable applications
                </Text>
              </li>
              <li>
                <Text fontSize="lg">
                  Applying data analysis and visualization techniques to uncover trends and patterns
                </Text>
              </li>
              <li>
                <Text fontSize="lg">
                  Staying ahead of trends and
                  embrace new technologies.
                </Text>
              </li>
            </ul>

            <Stack direction="row" spacing={4} mt={10}>
              <Button
                colorScheme="orange"
                variant="solid"
                onClick={() => navigate("/portfolio-app/contact")}
              >
                Contact Me
              </Button>
              <a
                href={require("../../asset/Priyal_Patel_Resume.pdf")}
                download="Priyal_Patel_Resume"
              >
                <Button colorScheme="orange" variant="outline">
                  Get Resume
                </Button>
              </a>
            </Stack>
          </Box>
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default About;
