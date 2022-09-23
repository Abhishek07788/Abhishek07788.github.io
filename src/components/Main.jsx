import React, { useRef } from "react";
import { useState } from "react";
import Home from "./Home";
import { SimpleGrid, Box, Heading, Text, useToast } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { useEffect } from "react";
import About from "./About";
import Projects from "./Projects";
import Skills from "./Skills";
import Contact from "./Contact";
import  Slide from "./Slide";
import AOS from "aos";
import "aos/dist/aos.css";

const Main = () => {
  const [checkTheme, setCheckTheme] = useState(false);
  const [theme, setTheme] = useState({});
  const projectScroll = useRef(null);
  const aboutScroll = useRef(null);
  const skillScroll = useRef(null);
  const contactScroll = useRef(null);
  const Toast = useToast();

  const Darkmode = () =>{
    if(checkTheme){
      Toast({
        title: "Light Mode ☀️",
        status: "success",
        duration: 2000,
        isClosable: true,
      })
    }
    else{
      Toast({
        title: "Dark Mode 🌑",
        status: "success",
        duration: 2000,
        isClosable: true,
      })
    }

    setCheckTheme(!checkTheme)
  }

  // =================== Scrolling =====================>
  const executeProject = () =>
    projectScroll.current.scrollIntoView({ behavior: "smooth" });

  const executeAbout = () =>
    aboutScroll.current.scrollIntoView({ behavior: "smooth" });

  const executeSkill = () =>
    skillScroll.current.scrollIntoView({ behavior: "smooth" });

  const executeContact = () =>
    contactScroll.current.scrollIntoView({ behavior: "smooth" });

  // =================== Animation =====================>

  useEffect(() => {
    AOS.init({ offset: 300, duration: 1000 });
  }, []);

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
            <Text
              display={["none", "none", "block", "block"]}
              className="navH"
              onClick={() =>
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
              }
            >
              HOME
            </Text>
            <Text
              display={["none", "none", "block", "block"]}
              className="navH"
              onClick={executeAbout}
            >
              ABOUT
            </Text>
            <Text
              display={["none", "none", "block", "block"]}
              w={105}
              className="navH"
              onClick={executeProject}
            >
              PROJECT
            </Text>
            <Text
              display={["none", "none", "block", "block"]}
              w={105}
              className="navH"
              onClick={executeSkill}
            >
              SKILLS
            </Text>
            <Text
              display={["none", "none", "block", "block"]}
              className="navH"
              onClick={executeContact}
            >
              CONTACT
            </Text>
            <a
              href="https://drive.google.com/file/d/11cBo69VOoq3wcwtPFDMv0t6R7MeHgrB8/view?usp=sharing"
              target="_blank"
            >
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
              onClick={Darkmode}
              borderRadius="10px"
              mb={-1.7}
              w={["40px", "40px", "40px", "50px"]}
              ml={["350%", "350%", "0%", "0%"]}
              _hover={
                {
                  border:"2px solid #fe9119"
                }
              }
            >
              {checkTheme ? (
                <SunIcon ml={0} fontSize={["25px", "26px", "30px", "30px"]} />
              ) : (
                <MoonIcon ml={0} fontSize={["25px", "26px", "30px", "30px"]} />
              )}
            </Box>
          </SimpleGrid>
        </SimpleGrid>

        {/*======================== More Option Icon ======================= */}
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
          <Slide theme={theme} 
              executeAbout={executeAbout}
              executeSkill={executeSkill}
              executeProject={executeProject}  
              executeContact={executeContact}        
          />
        </Box>
      </div>

      {/*======================== ( Components ) ======================= */}

     
      <Home checkTheme={checkTheme} />
      <About aboutScroll={aboutScroll} checkTheme={checkTheme} />
      <Projects projectScroll={projectScroll} checkTheme={checkTheme} />
      <Skills skillScroll={skillScroll} checkTheme={checkTheme} />
      <Contact contactScroll={contactScroll} checkTheme={checkTheme} />
    </div>
  );
};

export default Main;
