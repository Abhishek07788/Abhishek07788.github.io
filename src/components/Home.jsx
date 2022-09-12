import React from "react";
import myimage from "../Image/profile-pic (1).png";
import resume from "../Image/Abhishek_Pratrap_Solanki Resume.pdf";
import {
  SimpleGrid,
  Box,
  Heading,
  Text,
  Image,
  Button,
} from "@chakra-ui/react";
import { DownloadIcon, ViewIcon } from "@chakra-ui/icons";

const Home = ({ theme }) => {
  return (
    <div>

      {/* ---------------- Name ------------------ */}
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
        <SimpleGrid m={["auto","auto","auto"]} w={["98%", "98%", "85%"]}>
          <Heading
            fontSize={[25,25,30]}
            color={"#1a202c"}
            fontFamily={"'Times New Roman', Times, serif"}
            ml={[0,0,50]}
            alignItems="center"
            display="flex"
            style={theme}
          >
            Hello
            <span>
              <Image
                w={10}
                m={"auto"}
                ml={"0"}
                src="https://raw.githubusercontent.com/ABSphreak/ABSphreak/master/gifs/Hi.gif"
                alt="Abhi"
              />
            </span>
            , My name is
          </Heading>
          <Heading mt={[0,-1,2]} ml={[0,0,50]} fontSize={[32,32,50]}>
            Abhishek Pratap Solanki
          </Heading>

          <div className="tagLine">
            <Heading ml={[0,0,50]} fontSize={[26,27,40]} id="madeByMohit">
              I am a 
              <span style={{ color: "#fe9119" }}> Full Stack Developer.</span>
            </Heading>
          </div>

          {/*------------------ Resume ---------------- */}

          <SimpleGrid display={"flex"}>
            <a href="https://drive.google.com/file/d/1tCg8poSlmD-uHdvAUT2vjEdVFW_Dd_fe/view?usp=sharing">
              <Button
                fontSize={"18px"}
                border="2px solid #fe9119"
                ml={[0,0,50]}
                mt={8}
                bg={"#fe9119"}
                color="black"
                w="120px"
                mb={"40px"}
                _hover={{ w: "123px", color: "#fe9119", bg: "white" }}
              >
                Resume
                <ViewIcon ml={1} />
              </Button>
            </a>
            <a href={resume} download={"Abhishek Pratap Solanki Resume"}>
              <Button
                fontSize={"18px"}
                border="2px solid #fe9119"
                ml={3}
                mt={8}
                bg={"#fe9119"}
                color="black"
                w="20px"
                mb={"40px"}
                fontWeight={600}
                _hover={{ w: "23px", color: "#fe9119", bg: "white" }}
              >
                <DownloadIcon />
              </Button>
            </a>
          </SimpleGrid>
        </SimpleGrid>

        {/* ----------------------- Image ---------------------- */}
        <Box>
          <Image m={"auto"} w={400} src={myimage} alt="Avatar" />
        </Box>
      </SimpleGrid>
    </div>
  );
};

export default Home;
