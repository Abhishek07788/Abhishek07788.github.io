import React from "react";
import myimage from "../Image/profile-pic (1).png";
import {
  SimpleGrid,
  Box,
  Heading,
  Text,
  Image,
  Button,
} from "@chakra-ui/react";

const Home = ({theme}) => {
  return (
    <div>
      <SimpleGrid
        pl={70}
        bg={"#edf2f8"}
        textAlign={"left"}
        columns={[1, 1, 2]}
        m="auto"
        alignItems={"center"}
        mt={0.5}
        pt={"65px"}
        pb={"65px"}
        style={theme}
      >
        <SimpleGrid m="auto" w={["100%","100%","85%"]}>
          <Heading
            fontSize={30}
            color={"#1a202c"}
            fontFamily={"'Times New Roman', Times, serif"}
            ml={50}
            alignItems="center"
            display="flex"
            style={theme}
          >
            Hello
            <span>
              <Image
                w={10}
                src="https://raw.githubusercontent.com/ABSphreak/ABSphreak/master/gifs/Hi.gif"
                alt="Abhi"
              />
            </span>
            , My name is
          </Heading>
          <Heading mt={2} ml={50} fontSize={50}>
            Abhishek Pratap Solanki
          </Heading>

          <div className="tagLine">
            <Heading ml={50} id="madeByMohit">
              I am a{" "}
              <span style={{ color: "#fe9119" }}>
                Full Stack Developer.</span>
            </Heading>
          </div>
          <a href="https://drive.google.com/file/d/1tCg8poSlmD-uHdvAUT2vjEdVFW_Dd_fe/view?usp=sharing">
            <Button
              fontSize={"18px"}
              border="2px solid #fe9119"
              ml={50}
              mt={8}
              bg={"#fe9119"}
              w="120px"
              mb={"40px"}
              _hover={{ w: "123px", color: "#fe9119", bg: "white" }}
            >
              Resume
            </Button>
          </a>
        </SimpleGrid>
        <Box>
          <Image m={"auto"} w={400} src={myimage} alt="Avatar" />
        </Box>
      </SimpleGrid>
    </div>
  );
};

export default Home;
