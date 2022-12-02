import {
  SimpleGrid,
  Box,
  Heading,
  Text,
  Image,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { BsGithub } from "react-icons/bs";
import { RiVideoFill } from "react-icons/ri";
import { HiEye } from "react-icons/hi";
import { useState } from "react";
import animotoImg from "../Image/animotoClone.gif";
import coscheduleImg from "../Image/cosheduleClone.gif";
import lystImg from "../Image/lystClone.gif";
import portfolio from "../Image/portfolio.gif";
import Bitrix24 from "../Image/Bitrix24.gif";
import BeautyHub from "../Image/BeautyHub.gif";
import AOS from "aos";
import "aos/dist/aos.css";
import GitHub from "./GitHub";

const Projects = (props) => {
  const { checkTheme, projectScroll } = props;
  const [theme, setTheme] = useState({});
  const [theme1, setTheme1] = useState({});
  const toast = useToast();

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
    <div ref={projectScroll} className="mainDivProject" style={theme}>
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
        pb={"40px"}
      >
        {/* =============== BeautyHub Projects ================ */}

        <Box data-aos="zoom-in" borderRadius={10} p={4} style={theme1}>
          <Image
            border={"2px solid #fe9119"}
            w={"100%"}
            borderRadius={10}
            src={BeautyHub}
            alt="BeautyHub.in"
          />
          <Heading mt={4} fontSize={"22px"}>
            BeautyHub
          </Heading>
          <Text
            fontSize={["14px", "14px", "19px", "17px"]}
            lineHeight={"21px"}
            w="99%"
            mt={2}
            textAlign={"left"}
          >
            BeautyHub is an online retailer that sells premium beauty,clinical
            skincare,and luxury spa products. On this website, I have built
            Navbar. Signup, and login, I also handled the entire backend for
            signup and log-in by using JWT.
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
            ReactJS | CSS | JavaScript | Chakra UI | NODEJS | EXPRESS | MONGODB
            | JWT
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
              href="https://github.com/Sagarsandbhor17/Beautyhub"
              target="_blank"
              rel="noreferrer"
            >
              <BsGithub className="gitEye" style={{ marginTop: "3" }} />
            </a>
            <a
              href="https://drive.google.com/file/d/1f1TdXvjqz58Ndki73CsjqVV0vgNA8SQT/view?usp=sharing"
              target="_blank"
              title="Video (Google Drive)"
              rel="noreferrer"
            >
              <RiVideoFill mt={-1.5} className="gitEye" />
            </a>
            <a
              href="https://beautyhubproject.netlify.app/"
              target="_blank"
              title="Netlify"
              rel="noreferrer"
            >
              <HiEye mt={-1.5} className="gitEye" />
            </a>
          </Box>
        </Box>

        {/* =============== Bitrix24 - Clone Projects ================ */}

        <Box data-aos="zoom-in" borderRadius={10} p={4} style={theme1}>
          <Image
            border={"2px solid #fe9119"}
            w={"100%"}
            borderRadius={10}
            src={Bitrix24}
            alt="Bitrix24.in"
          />
          <Heading mt={4} fontSize={"22px"}>
            Bitrix24 - Clone{" "}
          </Heading>
          <Text
            fontSize={["14px", "14px", "19px", "17px"]}
            lineHeight={"21px"}
            w="99%"
            mt={2}
            textAlign={"left"}
          >
            This is a clone of Bitrix24 website. From Homepage, Login&SignUp to
            Feeds-Update, Tasks Adding-Deleting-Changing Status, Calendar
            Todo-Adding-Deleting. We have cloned every functionalities. In this
            project my part was "FEED" Page.
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
            ReactJS | CSS | JavaScript | Chakra UI | NODEJS | EXPRESS | MONGODB
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
              href="https://github.com/amitchouhan948/possible-temper-2642"
              target="_blank"
              rel="noreferrer"
            >
              <BsGithub className="gitEye" style={{ marginTop: "3" }} />
            </a>
            <a
              href="https://drive.google.com/file/d/1GM3cAQ-ztVqKW6MdbhrCQJoL_Sv9h7dN/view?usp=sharing"
              target="_blank"
              title="Video (Google Drive)"
              rel="noreferrer"
            >
              <RiVideoFill mt={-1.5} className="gitEye" />
            </a>
            <a
              href="https://bitrix24in.netlify.app/"
              target="_blank"
              title="Netlify"
              rel="noreferrer"
            >
              <HiEye mt={-1.5} className="gitEye" />
            </a>
          </Box>
        </Box>

        {/* =============== Lyst - Clone Projects ================ */}

        <Box data-aos="zoom-in" borderRadius={10} p={4} style={theme1}>
          <Image
            border={"2px solid #fe9119"}
            w={"100%"}
            borderRadius={10}
            src={lystImg}
            alt="lyst.com"
          />
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
            ReactJS | CSS | JavaScript | Json Server | Chakra UI
          </Text>
          <Box
            w={"80%"}
            m={"auto"}
            mt={[3, 3, 3, 10]}
            justifyItems={"center"}
            display={"flex"}
            justifyContent="space-between"
            fontSize={["30px", "30px", "36px", "40px"]}
            className="ProjectIcon"
          >
            <a
              href="https://github.com/Abhishek07788/impartial-honey-6054/tree/main/lyst.com"
              target="_blank"
              rel="noreferrer"
            >
              <BsGithub className="gitEye" style={{ marginTop: "3" }} />
            </a>
            <a
              href="https://www.linkedin.com/posts/abhishekpratapsolanki_project-lyst-react-activity-6970317062455848960-TnLX?utm_source=share&utm_medium=member_desktop"
              target="_blank"
              title="Video (LinkDin)"
              rel="noreferrer"
            >
              <RiVideoFill mt={-1.5} className="gitEye" />
            </a>
            <a
              href="https://cute-souffle-8b7dcd.netlify.app/"
              target="_blank"
              title="Netlify"
              rel="noreferrer"
            >
              <HiEye mt={-1.5} className="gitEye" />
            </a>
          </Box>
        </Box>

        {/* =============== My Portfolio - Clone Projects ================ */}

        <Box data-aos="zoom-in" borderRadius={10} p={4} style={theme1}>
          <Image
            border={"2px solid #fe9119"}
            w={"100%"}
            borderRadius={10}
            src={portfolio}
            alt="portfolio"
          />
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
            ReactJS | CSS | JavaScript | Chakra UI
          </Text>
          <Box
            w={"80%"}
            m={"auto"}
            mt={[3, 3, 3, 14]}
            justifyItems={"center"}
            display={"flex"}
            justifyContent="space-between"
            fontSize={["30px", "30px", "36px", "40px"]}
            className="ProjectIcon"
          >
            <a
              href="https://github.com/Abhishek07788/My-Portfolio"
              target="_blank"
              rel="noreferrer"
              onClick={() =>
                toast({
                  title: "This repository is private for some reasons.🙂!",
                  status: "info",
                  duration: 9000,
                  isClosable: true,
                })
              }
            >
              <BsGithub
                title="This is a private repository to protect the code !"
                className="gitEye"
                style={{ marginTop: "3" }}
              />
            </a>
            <a
              href="https://drive.google.com/file/d/1QwJVeoJ4oPI1SZcC60JrgzbNMwmPBnjC/view?usp=sharing"
              target="_blank"
              title="Video (Google Drive)"
              rel="noreferrer"
            >
              <RiVideoFill mt={-1.5} className="gitEye" />
            </a>
            <a
              href="https://abhishek07788.github.io/"
              target="_blank"
              rel="noreferrer"
            >
              <HiEye mt={-1.5} className="gitEye" />
            </a>
          </Box>
        </Box>

        {/* =============== Animoto - Clone Projects ================ */}

        <Box data-aos="zoom-in" borderRadius={10} p={4} style={theme1}>
          <Image
            border={"2px solid #fe9119"}
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
            the create option, I have build 9 pages.
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
            HTML | CSS | JavaScript | Json Server
          </Text>
          <Box
            w={"80%"}
            m={"auto"}
            mt={[3, 3, 3, 9]}
            justifyItems={"center"}
            display={"flex"}
            justifyContent="space-between"
            fontSize={["30px", "30px", "36px", "40px"]}
            className="ProjectIcon"
          >
            <a
              href="https://github.com/rohan209547mourya/deeply-tub-2367"
              target="_blank"
              rel="noreferrer"
            >
              <BsGithub className="gitEye" style={{ marginTop: "3" }} />
            </a>
            <a
              href="https://drive.google.com/file/d/1NBMMAl62B0tKTbssrkckqv4ycGUz5bmx/view?usp=sharing"
              target="_blank"
              title="Video (Google Drive)"
              rel="noreferrer"
            >
              <RiVideoFill mt={-1.5} className="gitEye" />
            </a>
            <a
              href="https://bright-sopapillas-48eab1.netlify.app/html/business"
              title="Netlify"
              target="_blank"
              rel="noreferrer"
            >
              <HiEye mt={-1.5} className="gitEye" />
            </a>
          </Box>
        </Box>

        {/* =============== Coschedule - Clone Projects ================ */}
        <Box data-aos="zoom-in" borderRadius={10} p={4} style={theme1}>
          <Image
            border={"2px solid #fe9119"}
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
            HTML | CSS | JavaScript
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
              rel="noreferrer"
            >
              <BsGithub className="gitEye" style={{ marginTop: "3" }} />
            </a>
            <a
              href="https://drive.google.com/file/d/1aZrzo1eFi9F2us2oqO7jp4QnQj7jfcB-/view?usp=sharing"
              target="_blank"
              title="Video (Google Drive)"
              rel="noreferrer"
            >
              <RiVideoFill mt={-1.5} className="gitEye" />
            </a>
            <a
              href="https://bejewelled-lebkuchen-8a5107.netlify.app/"
              target="_blank"
              title="Netlify"
              rel="noreferrer"
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
