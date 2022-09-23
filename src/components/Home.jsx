import React, { useEffect, useState } from "react";
import myimage from "../Image/profile-pic (1).png";
import resume from "../Image/Abhishek_Pratrap_Solanki Resume.pdf";
import {
  SimpleGrid,
  Box,
  Heading,
  Image,
  Button,
  useToast,
} from "@chakra-ui/react";
import { DownloadIcon, ViewIcon } from "@chakra-ui/icons";
import { AiFillLinkedin } from "react-icons/ai";
import { BiPhoneCall } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

const Home = (props) => {
  const { checkTheme } = props;
  const [theme, setTheme] = useState({});
  const Toast = useToast();

  // =================== Theme 1 =====================>

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
    <div>
      {/* ---------------- Main Div ------------------ */}

      <SimpleGrid
        pl={70}
        bg={"#edf2f8"}
        textAlign={"left"}
        columns={[1, 1, 2, 2]}
        m="auto"
        alignItems={"center"}
        mt={[-6, -5, 0.5, 0]}
        pt={["65px", "65px", "111px", "145px"]}
        pb={"105px"}
        className="HomeMain"
        style={theme}
      >
        {/*======================== Left side Div ======================= */}

        <SimpleGrid className="HomeBox1" 
          m={["auto", "auto", "auto", "auto"]}
          w={["98%", "98%", "98%", "85%"]}
        >
          {/*======================== Hello heading ======================= */}

          <Heading
            fontSize={[20, 22, 25, 30]}
            color={"#1a202c"}
            fontFamily={"'Times New Roman', Times, serif"}
            ml={[-10, 13, 0, 50]}
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

          {/*======================== Abhishek Heading ======================= */}

          <Heading
            mt={[0, 0, 0, 2]}
            ml={[-10, 13, 0, 50]}
            fontSize={[30, 30, 32, 50]}
          >
            Abhishek Pratap Solanki
          </Heading>

          {/*======================== Animation Heading ======================= */}

          <div className="tagLine">
            <Heading
              mt={[-4, -4, 0, 0]}
              ml={[-10, 13, 0, 50]}
              fontSize={[23, 24, 23, 30]}
              id="madeByAbhishek"
            >
              I am a
              <span style={{ color: "#fe9119" }}> Full Stack Developer.</span>
            </Heading>
          </div>

          {/*======================== Social Media Icons ======================= */}
          <Box
            bottom="0"
            right="0"
            display={"flex"}
            w={"60%"}
            ml={[-10, 13, 0, 50]}
            mt={5}
            gap={2}
            pb={["80px", "80px", "80px", "80px"]}
          >
            <a
              href="http://www.linkedin.com/in/abhishekpratapsolanki"
              target="_blank"
            >
              <Button
                color="black"
                border={"1px"}
                bg="#ffb153"
                fontSize={["16px", "17px", "20px", "20px"]}
                p={[0, 0, 2, 2]}
                borderRadius="50%"
                transition="all .3s ease-in-out"
                _hover={{
                  border: "2px solid #0a66c2",
                  transform: "scale(1.2)",
                  bg: "#ffff",
                  color: "#0a66c2",
                }}
              >
                <AiFillLinkedin />
              </Button>
            </a>
            <a href="https://github.com/Abhishek07788" target="_blank">
              <Button
                color="black"
                border={"1px"}
                bg="#ffb153"
                fontSize={["16px", "17px", "20px", "20px"]}
                p={[0, 0, 2, 2]}
                borderRadius="50%"
                transition="all .3s ease-in-out"
                _hover={{
                  transform: "scale(1.2)",
                  border: "2px solid #3f3d55",
                  bg: "#ffff",
                  color: "#3f3d55",
                }}
              >
                <BsGithub />
              </Button>
            </a>
            <a href="mailto:abhisheksolanki1020@gmail.com">
              <Button
                color="black"
                border={"1px"}
                bg="#ffb153"
                fontSize={["16px", "17px", "20px", "20px"]}
                p={[0, 0, 2, 2]}
                borderRadius="50%"
                transition="all .3s ease-in-out"
                _hover={{
                  transform: "scale(1.2)",
                  bg: "#ffff",
                  border: "2px solid #f04244",
                  color: "#f04244",
                }}
              >
                <MdEmail />
              </Button>
            </a>
            <a href="tel:+919758207006">
              <Button
                color="black"
                border={"1px"}
                bg="#ffb153"
                borderRadius={"50%"}
                fontSize={["16px", "17px", "20px", "20px"]}
                p={[0, 0, 2, 2]}
                transition="all .3s ease-in-out"
                _hover={{
                  transform: "scale(1.2)",
                  bg: "#ffff",
                  border: "2px solid #4db946",
                  color: "#4db946",
                }}
              >
                <BiPhoneCall />
              </Button>
            </a>
          </Box>

          {/*======================== Resume buttons ======================= */}

          <SimpleGrid display={"flex"}  mt={["-16","-16","-65","-65"]}>
            {/*======================== View Resume ======================= */}

            <a href={resume}>
              <Button
                border="2px solid #ffb153"
                ml={[-10, 13, 0, 50]}
                bg={"#ffb153"}
                color="black"
                fontSize={["14px", "14px", "16x"]}
                w={["90px", "90px", "100px"]}
                mb={"40px"}
                transition="all .3s ease-in-out"
                _hover={{
                  color: "#fe9119",
                  bg: "white",
                  transform: "scale(1.15)",
                }}
              >
                Resume
                <ViewIcon ml={1} />
              </Button>
            </a>

            {/*======================== Download Resume ======================= */}

            <a href={resume} download={"Abhishek Pratap Solanki Resume"}>
              <Button
                onClick={() =>
                  Toast({
                    title: "Downloading...",
                    status: "success",
                    duration: 3000,
                    isClosable: true,
                  })
                }
                border="2px solid #ffb153"
                ml={3}
                bg={"#ffb153"}
                color="black"
                fontSize={["18px", "18px", "18px"]}
                w={["30px", "30px", "40px"]}
                fontWeight={600}
                transition="all .3s ease-in-out"
                _hover={{
                  color: "#fe9119",
                  bg: "white",
                  transform: "scale(1.15)",
                }}
              >
                <DownloadIcon />
              </Button>
            </a>
          </SimpleGrid>
        </SimpleGrid>

        {/*======================== My Image (Avatar) ======================= */}

        <Box className="HomeBox2" ml={["-25%", "-18%", "1%"]}> 
          <Image
            borderRadius={"50%"}
            border={"1px solid #dc3544"}
            mt="-3"
            m={"auto"}
            w={[320, 320, 290, 380]}
            transition="all 1s ease-in-out"
            _hover={{
              transform: "scale(1.2)",
            }}
            src={myimage}
            alt="Avatar"
          />
        </Box>
      </SimpleGrid>
    </div>
  );
};

export default Home;
