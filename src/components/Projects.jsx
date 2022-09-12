import { SimpleGrid, Box, Heading, Text, Image } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { BsGithub } from "react-icons/bs";
import { HiEye } from "react-icons/hi";
import { useState } from "react";
import { ViewIcon } from "@chakra-ui/icons";
import animotoImg from "../Image/animotoClone.gif";

const Projects = (props) => {
  const { checkTheme } = props;
  const [theme, setTheme] = useState({});
  useEffect(() => {
    if (checkTheme) {
      setTheme({
        color: "white",
        backgroundColor: "#0f1624",
      });
    } else {
      setTheme({
        color: "black",
        backgroundColor: "#edf2f8",
      });
    }
  }, [checkTheme]);

  return (
    <div className="mainDiv" style={theme}>
      <Heading fontSize={40}>
        My <span style={{ color: "#fe9119" }}>Projects</span>
      </Heading>
      <SimpleGrid
        m={"auto"}
        mt={"20"}
        w={"80%"}
        columns={[1, 1, 2]}
        spacing="40px"
        className="ProjectDiv"
        textAlign={"center"}
      >
        <Box borderRadius={10} p={4} bg={"#fffff"}>
          <Image w={"100%"} borderRadius={10} src={animotoImg} alt="Animoto.com" />
          <Heading mt={4} fontSize={"22px"}>
            LYST - Clone{" "}
          </Heading>
          <Text lineHeight={"21px"} w="99%" mt={2} textAlign={"left"}>
            This website is a clone of "lyst.com". Lyst is a global fashion
            search platform, I have cloned it individually, And this project is
            fully responsive.
          </Text>
          <Text mt={2} textAlign={"left"}>
            <b> Individual Project </b>| <b>Duration: </b> 04 Days
          </Text>
          <Text mt={2} textAlign={"left"} fontSize="15px">
            <b style={{ color: "#fe9119", fontSize: "17px" }}>TECH STACK: </b>
            REACT | CSS | JAVASCRIPT | JSON SERVER | CHAKRA UI
          </Text>
          <Box
            w={"80%"}
            m={"auto"}
            mt={3}
            justifyItems={"center"}
            display={"flex"}
            justifyContent="space-between"
            fontSize={"40px"}
            className="ProjectIcon"
          >
            <a href="https://github.com/Abhishek07788/impartial-honey-6054/tree/main/lyst.com">
            <BsGithub style={{ marginTop: "3" }} />
            </a>
            <a href="https://cute-souffle-8b7dcd.netlify.app/">
            <HiEye mt={-1.5}  />
            </a>
          </Box>
        </Box>
        <Box borderRadius={10} p={4} bg={"#fffff"}>
          <Image w={"100%"} borderRadius={10} src={animotoImg} alt="Animoto.com" />
          <Heading mt={4} fontSize={"22px"}>
            Animoto Video Maker - Clone{" "}
          </Heading>
          <Text lineHeight={"21px"} w="99%" mt={2} textAlign={"left"}>
            This website is a clone of "Animoto.com" where user can edit and
            make new videos in this website there is alot of templates user can
            choose anyone.
          </Text>
          <Text mt={2} textAlign={"left"}>
            <b> Group Project: </b> 5 Collaborators | <b>Duration: </b> 05 Days
          </Text>
          <Text mt={2} textAlign={"left"} fontSize="15px">
            <b style={{ color: "#fe9119", fontSize: "17px" }}>TECH STACK: </b>
            HTML | CSS | JAVASCRIPT | JSON SERVER
          </Text>
          <Box
            w={"80%"}
            m={"auto"}
            mt={3}
            justifyItems={"center"}
            display={"flex"}
            justifyContent="space-between"
            fontSize={"40px"}
            className="ProjectIcon"
          >
            <a href="https://github.com/Abhishek07788/impartial-honey-6054/tree/main/lyst.com">
            <BsGithub style={{ marginTop: "3" }} />
            </a>
            <a href="https://cute-souffle-8b7dcd.netlify.app/">
            <HiEye mt={-1.5}  />
            </a>
          </Box>
        </Box>
        <Box borderRadius={10} p={4} bg={"#fffff"}>
          <Image w={"100%"} borderRadius={10} src={animotoImg} alt="Animoto.com" />
          <Heading mt={4} fontSize={"22px"}>
            Animoto Video Maker - Clone{" "}
          </Heading>
          <Text lineHeight={"21px"} w="99%" mt={2} textAlign={"left"}>
            This website is a clone of "Animoto.com" where user can edit and
            make new videos in this website there is alot of templates user can
            choose anyone.
          </Text>
          <Text mt={2} textAlign={"left"}>
            <b> Group Project: </b> 5 Collaborators | <b>Duration: </b> 05 Days
          </Text>
          <Text mt={2} textAlign={"left"} fontSize="15px">
            <b style={{ color: "#fe9119", fontSize: "17px" }}>TECH STACK: </b>
            HTML | CSS | JAVASCRIPT | JSON SERVER
          </Text>
          <Box
            w={"80%"}
            m={"auto"}
            mt={3}
            justifyItems={"center"}
            display={"flex"}
            justifyContent="space-between"
            fontSize={"40px"}
            className="ProjectIcon"
          >
            <a href="https://github.com/Abhishek07788/impartial-honey-6054/tree/main/lyst.com">
            <BsGithub style={{ marginTop: "3" }} />
            </a>
            <a href="https://cute-souffle-8b7dcd.netlify.app/">
            <HiEye mt={-1.5}  />
            </a>
          </Box>
        </Box>
        <Box borderRadius={10} p={4} bg={"#fffff"}>
          <Image w={"100%"} borderRadius={10} src={animotoImg} alt="Animoto.com" />
          <Heading mt={4} fontSize={"22px"}>
            Animoto Video Maker - Clone{" "}
          </Heading>
          <Text lineHeight={"21px"} w="99%" mt={2} textAlign={"left"}>
            This website is a clone of "Animoto.com" where user can edit and
            make new videos in this website there is alot of templates user can
            choose anyone.
          </Text>
          <Text mt={2} textAlign={"left"}>
            <b> Group Project: </b> 5 Collaborators | <b>Duration: </b> 05 Days
          </Text>
          <Text mt={2} textAlign={"left"} fontSize="15px">
            <b style={{ color: "#fe9119", fontSize: "17px" }}>TECH STACK: </b>
            HTML | CSS | JAVASCRIPT | JSON SERVER
          </Text>
          <Box
            w={"80%"}
            m={"auto"}
            mt={3}
            justifyItems={"center"}
            display={"flex"}
            justifyContent="space-between"
            fontSize={"40px"}
            className="ProjectIcon"
          >
            <a href="https://github.com/Abhishek07788/impartial-honey-6054/tree/main/lyst.com">
            <BsGithub style={{ marginTop: "3" }} />
            </a>
            <a href="https://cute-souffle-8b7dcd.netlify.app/">
            <HiEye mt={-1.5}  />
            </a>
          </Box>
        </Box>
      </SimpleGrid>
    </div>
  );
};

export default Projects;
