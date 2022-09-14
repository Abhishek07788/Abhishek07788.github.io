import React from "react";
import { useState } from "react";
import Home from "./Home";
import { SimpleGrid, Box, Heading, Text } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { useEffect } from "react";
import About from "./About";
import Projects from "./Projects";
import Skills from "./Skills";
import Contact from "./Contact";
import { AiOutlineMenu } from "react-icons/ai";

const Main = () => {
  const [checkTheme, setCheckTheme] = useState(false);
  const [theme, setTheme] = useState({});
  // console.log('theme: ', theme);

  // =================== Theme 1 =====================>

  useEffect(() => {
    if (checkTheme) {
      setTheme({
        color: "white",
        backgroundColor: "#0a101a",
      });
    } else {
      setTheme({
        color: "black",
        backgroundColor: "#d5e2f1",
      });
    }
  }, [checkTheme]);

  return (
    <div>
      {/*======================== MAin div ======================= */}

      <div style={{ position: "sticky", top: 0, left: 0, zIndex: 1000 }}>
        {/*======================== 2 main div ======================= */}

        <SimpleGrid
          bg={"#edf2f8"}
          display="flex"
          justifyContent={"space-between"}
          spacing={10}
          style={theme}
          position={"sticky"}
        >
          {/*================= left 2 color name ======================= */}

          <Heading
            p={3}
            pt={["2", "2", "5", "2"]}
            pb={["2", "2", "5", "2"]}
            fontSize={["25px", "25px", "25px", "40px"]}
            ml={[1, 2, 5]}
            textAlign={"left"}
            fontWeight={700}
          >
            AHI
            <span
              style={{
                color: "#fe9119",
              }}
            >
              SHEK
            </span>
          </Heading>

          {/*=============== Right side option main div ================== */}

          <SimpleGrid
            mr={5}
            fontSize={"16px"}
            fontWeight={600}
            alignItems={"center"}
            columns={7}
            spacing={0}
            style={theme}
            // border="1px solid red"
            float={"right"}
          >
            <Text display={["none", "none", "block", "block"]} className="navH">
              HOME
            </Text>
            <Text display={["none", "none", "block", "block"]} className="navH">
              ABOUT
            </Text>
            <Text
              display={["none", "none", "block", "block"]}
              w={105}
              className="navH"
            >
              PROJECT
            </Text>
            <Text
              display={["none", "none", "block", "block"]}
              w={105}
              className="navH"
            >
              SKILLS
            </Text>
            <Text display={["none", "none", "block", "block"]} className="navH">
              CONTACT
            </Text>
            <a href="https://drive.google.com/file/d/1tCg8poSlmD-uHdvAUT2vjEdVFW_Dd_fe/view?usp=sharing">
              <Text
                display={["none", "none", "block", "block"]}
                className="navH"
              >
                RESUME
              </Text>
            </a>

            {/*===================== Dark theme Icons ======================= */}

            <Box
              // border={"2px solid #fe9119"}
              borderRadius="10px"
              w={["40px", "40px", "40px", "50px"]}
              ml={["350%", "350%", "0%", "0%"]}
              onClick={() => setCheckTheme(!checkTheme)}
            >
              {checkTheme ? (
                <SunIcon ml={0} fontSize={["29px", "29px", "35px", "35px"]} />
              ) : (
                <MoonIcon ml={0} fontSize={["29px", "29px", "35px", "35px"]} />
              )}
            </Box>
          </SimpleGrid>
        </SimpleGrid>

        {/*======================== More Ontion Icon ======================= */}
        <Box
          position={"absolute"}
          right="0"
          top="0"
          mr={"15px"}
          mt={["15px", "15px", "20px", "20px"]}
          display={["block", "block", "none", "none"]}
          p={0}
          fontSize="28px"
          borderRadius={10}
          fontWeight={700}
          transition="all .4s ease-in-out"
          style={theme}
          _hover={{ transform: "scale(1.1)" }}
        >
          <AiOutlineMenu />
        </Box>
      </div>

      {/*======================== ( Components ) ======================= */}

      <Home checkTheme={checkTheme} />
      <About checkTheme={checkTheme} />
      <Projects checkTheme={checkTheme} />
      <Skills checkTheme={checkTheme} />
      <Contact checkTheme={checkTheme} />
    </div>
  );
};

export default Main;
