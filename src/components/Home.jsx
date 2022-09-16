import React, { useEffect, useState } from "react";
import myimage from "../Image/profile-pic (1).png";
import resume from "../Image/Abhishek_Pratrap_Solanki Resume.pdf";
import { SimpleGrid, Box, Heading, Image, Button } from "@chakra-ui/react";
import { DownloadIcon, ViewIcon } from "@chakra-ui/icons";

const Home = (props) => {
  const { checkTheme } = props;
  const [theme, setTheme] = useState({});

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
        mt={0.5}
        pt={["65px", "65px", "111px", "145px"]}
        pb={"105px"}
        style={theme}
      >


      
    {/*======================== Left side Div ======================= */}

        <SimpleGrid
          m={["auto", "auto", "auto", "auto"]}
          w={["98%", "98%", "98%", "85%"]}
        >

        
    {/*======================== Hello heading ======================= */}

          <Heading
            fontSize={[25, 25, 25, 30]}
            color={"#1a202c"}
            fontFamily={"'Times New Roman', Times, serif"}
            ml={[0, 0, 0, 50]}
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
            ml={[0, 0, 0, 50]}
            fontSize={[32, 32, 32, 50]}
          >
            Abhishek Pratap Solanki
          </Heading>

    
    {/*======================== Animation Heading ======================= */}

          <div className="tagLine">
            <Heading
              ml={[0, 0, 0, 50]}
              fontSize={[23, 24, 23, 30]}
              id="madeByAbhishek"
            >
              I am a
              <span style={{ color: "#fe9119" }}> Full Stack Developer.</span>
            </Heading>
          </div>

      
    {/*======================== Resume buttons ======================= */}

          <SimpleGrid display={"flex"}>
            
    {/*======================== View Resume ======================= */}

            <a href={resume}>
              <Button
                border="2px solid #fe9119"
                ml={[0, 0, 0, 50]}
                mt={8}
                bg={"#fe9119"}
                color="black"
                fontSize={["14px", "14px", "18px"]}
                w={["90px", "90px", "120px"]}
                mb={"40px"}
                transition="all .4s ease-in-out"
                _hover={{
                  color: "#fe9119",
                  bg: "white",
                  transform: "scale(1.1)",
                }}
              >
                Resume
                <ViewIcon ml={1} />
              </Button>
            </a>
            
    {/*======================== Download Resume ======================= */}

            <a href={resume} download={"Abhishek Pratap Solanki Resume"}>
              <Button
                border="2px solid #fe9119"
                ml={3}
                mt={8}
                bg={"#fe9119"}
                color="black"
                fontSize={["18px", "18px", "18px"]}
                w={["30px", "30px", "40px"]}
                fontWeight={600}
                transition="all .4s ease-in-out"
                _hover={{
                  color: "#fe9119",
                  bg: "white",
                  transform: "scale(1.1)",
                }}
              >
                <DownloadIcon />
              </Button>
            </a>
          </SimpleGrid>
        </SimpleGrid>

      
    {/*======================== My Image (Avatar) ======================= */}

        <Box ml={["-26%", "-18%", "1%"]}>
          <Image
            borderRadius={"50%"}
            border={"1px solid #dc3544"}
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
