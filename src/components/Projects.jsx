import { SimpleGrid, Box, Heading, Text, Image } from "@chakra-ui/react";
import React, { useEffect, useRef } from "react";
import { BsGithub } from "react-icons/bs";
import { HiEye } from "react-icons/hi";
import { useState } from "react";
import animotoImg from "../Image/animotoClone.gif";
import coscheduleImg from "../Image/cosheduleClone.gif";
import lystImg from "../Image/lystClone.gif";
import portfolio from "../Image/portfolio.gif";
import AOS from "aos";
import "aos/dist/aos.css";

const Projects = (props) => {
  const { checkTheme, projectScroll } = props;
  const [theme, setTheme] = useState({});
  const [theme1, setTheme1] = useState({});

  // =================== Animation =====================>

  useEffect(() => {
    AOS.init({ offset: 300, duration: 1000 });
  }, []);

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

  // =================== Theme 2 =====================>
  useEffect(() => {
    if (checkTheme) {
      setTheme1({
        color: "white",
        backgroundColor: "#1a202c",
      });
    } else {
      setTheme1({
        color: "black",
        backgroundColor: "#ffffff",
      });
    }
  }, [checkTheme]);

  return (
    <div ref={projectScroll} className="mainDiv" style={theme}>
      <Heading fontSize={40}>
        My <span style={{ color: "#fe9119" }}>Projects</span>
      </Heading>

      {/* ================= All Projects ================ */}
      <SimpleGrid
        m={"auto"}
        mt={"20"}
        w={"80%"}
        columns={[1, 1, 1, 2]}
        spacing="40px"
        className="ProjectDiv"
        textAlign={"center"}
        pb={"100px"}
      >
        {/* =============== Lyst - Clone Projects ================ */}

        <Box data-aos="zoom-in" borderRadius={10} p={4} style={theme1}>
          <Image w={"100%"} borderRadius={10} src={lystImg} alt="lyst.com" />
          <Heading mt={4} fontSize={"22px"}>
            LYST - Clone{" "}
          </Heading>
          <Text
            fontSize={["14px", "14px", "19px", "17px"]}
            lineHeight={"21px"}
            w="99%"
            mt={2}
            textAlign={"left"}
          >
            This website is a clone of "lyst.com". Lyst is a global fashion
            search platform, I have cloned it individually, And this project is
            fully responsive.
          </Text>
          <Text
            mt={2}
            textAlign={"left"}
            fontSize={["14px", "14px", "19px", "17px"]}
          >
            <b> Individual Project </b>| <b>Duration: </b> 04 Days
          </Text>
          <Text
            mt={2}
            textAlign={"left"}
            fontSize={["13px", "13px", "16px", "15px"]}
          >
            <span style={{ color: "#fe9119", fontSize: "16px" }}>
              TECH STACK:{" "}
            </span>
            REACT | CSS | JAVASCRIPT | JSON SERVER | CHAKRA UI
          </Text>
          <Box
            w={"80%"}
            m={"auto"}
            mt={3}
            justifyItems={"center"}
            display={"flex"}
            justifyContent="space-between"
            fontSize={["30px", "30px", "36px", "40px"]}
            className="ProjectIcon"
          >
            <a
              href="https://github.com/Abhishek07788/impartial-honey-6054/tree/main/lyst.com"
              target="_blank"
            >
              <BsGithub className="gitEye" style={{ marginTop: "3" }} />
            </a>
            <a href="https://cute-souffle-8b7dcd.netlify.app/" target="_blank">
              <HiEye mt={-1.5} className="gitEye" />
            </a>
          </Box>
        </Box>

        {/* =============== My Portfolio - Clone Projects ================ */}

        <Box data-aos="zoom-in" borderRadius={10} p={4} style={theme1}>
          <Image w={"100%"} borderRadius={10} src={portfolio} alt="portfolio" />
          <Heading mt={4} fontSize={"22px"}>
            My Portfolio{" "}
          </Heading>
          <Text
            fontSize={["14px", "14px", "19px", "17px"]}
            lineHeight={"21px"}
            w="99%"
            mt={2}
            textAlign={"left"}
          >
            This is my fully responsive portfolio which I recently made using
            React & Chakra UI, This website has Dark mode, Scrolling
            functionality etc.
          </Text>
          <Text
            mt={2}
            textAlign={"left"}
            fontSize={["14px", "14px", "19px", "17px"]}
          >
            <b> Individual Project </b>| <b>Duration: </b> 04 Days
          </Text>
          <Text
            mt={2}
            textAlign={"left"}
            fontSize={["13px", "13px", "16px", "15px"]}
          >
            <span style={{ color: "#fe9119", fontSize: "16px" }}>
              TECH STACK:{" "}
            </span>
            REACT | CSS | JAVASCRIPT | CHAKRA UI
          </Text>
          <Box
            w={"80%"}
            m={"auto"}
            mt={3}
            justifyItems={"center"}
            display={"flex"}
            justifyContent="space-between"
            fontSize={["30px", "30px", "36px", "40px"]}
            className="ProjectIcon"
          >
            <a
              href="https://github.com/Abhishek07788/Abhishek07788.github.io"
              target="_blank"
            >
              <BsGithub className="gitEye" style={{ marginTop: "3" }} />
            </a>
            <a href="https://abhishek07788.github.io/" target="_blank">
              <HiEye mt={-1.5} className="gitEye" />
            </a>
          </Box>
        </Box>

        {/* =============== Animoto - Clone Projects ================ */}

        <Box data-aos="zoom-in" borderRadius={10} p={4} style={theme1}>
          <Image
            w={"100%"}
            borderRadius={10}
            src={animotoImg}
            alt="Animoto.com"
          />
          <Heading mt={4} fontSize={"22px"}>
            Animoto - Clone
          </Heading>
          <Text
            fontSize={["14px", "14px", "19px", "17px"]}
            lineHeight={"21px"}
            w="99%"
            mt={2}
            textAlign={"left"}
          >
            This website is a clone of "Animoto.com" where user can edit and
            make new videos this website has lots of templates to make different
            videos. In this team project I created navbar, footer part and In
            the create option. I have made 9 pages.
          </Text>
          <Text
            mt={2}
            textAlign={"left"}
            fontSize={["14px", "14px", "19px", "17px"]}
          >
            <b> Group Project: </b> 5 Collaborators | <b>Duration: </b> 05 Days
          </Text>
          <Text
            mt={2}
            textAlign={"left"}
            fontSize={["13px", "13px", "16px", "15px"]}
          >
            <span style={{ color: "#fe9119", fontSize: "16px" }}>
              TECH STACK:{" "}
            </span>
            HTML | CSS | JAVASCRIPT | JSON SERVER
          </Text>
          <Box
            w={"80%"}
            m={"auto"}
            mt={3}
            justifyItems={"center"}
            display={"flex"}
            justifyContent="space-between"
            fontSize={["30px", "30px", "36px", "40px"]}
            className="ProjectIcon"
          >
            <a
              href="https://github.com/rohan209547mourya/deeply-tub-2367"
              target="_blank"
            >
              <BsGithub className="gitEye" style={{ marginTop: "3" }} />
            </a>
            <a
              href="https://bright-sopapillas-48eab1.netlify.app/html/business"
              target="_blank"
            >
              <HiEye mt={-1.5} className="gitEye" />
            </a>
          </Box>
        </Box>

        {/* =============== Coschedule - Clone Projects ================ */}
        <Box data-aos="zoom-in" borderRadius={10} p={4} style={theme1}>
          <Image
            w={"100%"}
            borderRadius={10}
            src={coscheduleImg}
            alt="coschedule.com"
          />
          <Heading mt={4} fontSize={"22px"}>
            Coschedule - Clone
          </Heading>
          <Text
            fontSize={["14px", "14px", "19px", "17px"]}
            lineHeight={"21px"}
            w="99%"
            mt={2}
            textAlign={"left"}
          >
            This website is a clone of "coschedule.com", CoSchedule Marketing
            Suite is a family of agile marketing products that helps you
            coordinate your process, projects, and teams. In this team project I
            created navbar, Home page, footer part and Headline page and Build
            Your Case For CoSchedule page. 
          </Text>
          <Text
            mt={2}
            textAlign={"left"}
            fontSize={["14px", "14px", "19px", "17px"]}
          >
            <b> Group Project: </b> 4 Collaborators | <b>Duration: </b> 05 Days
          </Text>
          <Text
            mt={2}
            textAlign={"left"}
            fontSize={["13px", "13px", "16px", "15px"]}
          >
            <span style={{ color: "#fe9119", fontSize: "16px" }}>
              TECH STACK:{" "}
            </span>
            HTML | CSS | JAVASCRIPT
          </Text>
          <Box
            w={"80%"}
            m={"auto"}
            mt={3}
            justifyItems={"center"}
            display={"flex"}
            justifyContent="space-between"
            fontSize={["30px", "30px", "36px", "40px"]}
            className="ProjectIcon"
          >
            <a
              href="https://github.com/Abhishek07788/CoShedule-Website-Project-"
              target="_blank"
            >
              <BsGithub className="gitEye" style={{ marginTop: "3" }} />
            </a>
            <a
              href="https://bejewelled-lebkuchen-8a5107.netlify.app/"
              target="_blank"
            >
              <HiEye mt={-1.5} className="gitEye" />
            </a>
          </Box>
        </Box>
      </SimpleGrid>
    </div>
  );
};

export default Projects;
