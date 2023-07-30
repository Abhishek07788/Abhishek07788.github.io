import React, { useRef } from "react";
import { useState } from "react";
import Home from "./Home";
import {
  SimpleGrid,
  Box,
  Heading,
  Text,
  useToast,
  Spinner,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { useEffect } from "react";
import About from "./About";
import Projects from "./Projects";
import Skills from "./Skills";
import Contact from "./Contact";
import Slide from "./Slide";
import AOS from "aos";
import "aos/dist/aos.css";
import GitHub from "./GitHub";
import { data } from "../data/data";

const Main = () => {
  const [checkTheme, setCheckTheme] = useState(true);
  const [theme, setTheme] = useState({});
  const [loading, setLoading] = useState(false);
  const projectScroll = useRef(null);
  const GithubScroll = useRef(null);
  const aboutScroll = useRef(null);
  const skillScroll = useRef(null);
  const contactScroll = useRef(null);
  const Toast = useToast();

  useEffect(() => {
    Toast({
      title: "Welcome to my Portfolio 😊",
      status: "info",
      duration: 2000,
      isClosable: true,
      position: "top",
    });
  }, []);

  const Darkmode = () => {
    if (checkTheme) {
      Toast({
        title: "Light Mode ☀️",
        status: "success",
        duration: 1500,
        isClosable: true,
        position: "bottom-left",
      });
    } else {
      Toast({
        title: "Dark Mode 🌑",
        status: "success",
        duration: 1500,
        isClosable: true,
        position: "bottom-left",
        variant: "left-accent",
      });
    }

    //--------
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 0);

    //--------
    setCheckTheme(!checkTheme);
  };

  // =================== Scrolling =====================>
  const executeProject = () =>
    projectScroll.current.scrollIntoView({ behavior: "smooth" });

  const executeGithub = () =>
    GithubScroll.current.scrollIntoView({ behavior: "smooth" });

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

      <div className="Nab">
        {/*======================== 2 main div ======================= */}

        <SimpleGrid
          bg={"#edf2f8"}
          display="flex"
          border="2px solid #fe8f191b"
          justifyContent={"space-between"}
          spacing={10}
          borderBottomRadius="25px"
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
            cursor="pointer"
            onClick={() =>
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
            }
          >
            ABHI
            <span
              style={{
                color: data.universal.color,
              }}
            >
              SHEK
            </span>
          </Heading>

          {/*=============== Right side option main div ================== */}

          <SimpleGrid
            mr={[5]}
            ml={["-8"]}
            // w={["0%", "0%", "160%", "44%"]}
            fontSize={"16px"}
            fontWeight={600}
            display="flex"
            alignItems={"center"}
            style={theme}
            // border="1px solid red"
            float={"right"}
            gap={["0", "0", "2", "5"]}
          >
            <Text
              display={["none", "none", "block", "block"]}
              className="navH"
              _hover={{
                color: data.universal.color,
              }}
              onClick={() =>
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
              }
            >
              HOME
            </Text>
            <Text
              display={["none", "none", "block", "block"]}
              className="navH"
              _hover={{
                color: data.universal.color,
              }}
              onClick={executeAbout}
            >
              ABOUT
            </Text>
            <Text
              display={["none", "none", "block", "block"]}
              className="navH"
              _hover={{
                color: data.universal.color,
              }}
              onClick={executeProject}
            >
              PROJECT
            </Text>
            <Text
              display={["none", "none", "block", "block"]}
              className="navH"
              _hover={{
                color: data.universal.color,
              }}
              onClick={executeGithub}
            >
              GITHUB
            </Text>
            <Text
              display={["none", "none", "block", "block"]}
              className="navH"
              _hover={{
                color: data.universal.color,
              }}
              onClick={executeSkill}
            >
              SKILLS
            </Text>
            <Text
              display={["none", "none", "block", "block"]}
              className="navH"
              _hover={{
                color: data.universal.color,
              }}
              onClick={executeContact}
            >
              CONTACT
            </Text>
            <a
              href="https://drive.google.com/file/d/11cBo69VOoq3wcwtPFDMv0t6R7MeHgrB8/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              <Text
                display={["none", "none", "block", "block"]}
                className="navH"
                _hover={{
                  color: data.universal.color,
                }}
                w={["110px", "110px", "80px", "73x"]}
                title="View Resume on Google Drive"
              >
                RESUME
              </Text>
            </a>

            {/*===================== Dark theme Icons ======================= */}

            <Box
              // border={{`2px solid ${data.universal.color}`}}
              onClick={Darkmode}
              borderRadius="10px"
              w={["40px", "40px", "40px", "50px"]}
              ml={["-70%", "-70%", "0%", "0%"]}
              title="Theme"
            >
              {loading && (
                <Box
                  p="0"
                  pt="2px"
                  borderRadius={"10px"}
                  border={`1px solid ${data.universal.color}`}
                >
                  <Spinner />
                </Box>
              )}

              {checkTheme ? (
                <SunIcon
                  display={loading ? "none" : "block"}
                  ml={[1, 1, 1, 2]}
                  fontSize={["25px", "26px", "30px", "30px"]}
                  transition="all .2s ease-in-out"
                  _hover={{
                    transform: "scale(1.3)",
                  }}
                />
              ) : (
                <MoonIcon
                  display={loading ? "none" : "block"}
                  ml={[1, 1, 1, 2]}
                  fontSize={["25px", "26px", "30px", "30px"]}
                  transition="all .2s ease-in-out"
                  _hover={{
                    transform: "scale(1.3)",
                  }}
                />
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
          <Slide
            theme={theme}
            executeAbout={executeAbout}
            executeSkill={executeSkill}
            executeProject={executeProject}
            executeGithub={executeGithub}
            executeContact={executeContact}
          />
        </Box>
      </div>

      {/*======================== ( Components ) ======================= */}

      <Home checkTheme={checkTheme} />
      <About aboutScroll={aboutScroll} checkTheme={checkTheme} />
      <Projects projectScroll={projectScroll} checkTheme={checkTheme} />
      <GitHub GithubScroll={GithubScroll} checkTheme={checkTheme} />
      <Skills skillScroll={skillScroll} checkTheme={checkTheme} />
      <Contact contactScroll={contactScroll} checkTheme={checkTheme} />
    </div>
  );
};

export default Main;
