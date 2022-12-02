import React, { useEffect, useState } from "react";
import GitHubCalendar from "react-github-calendar";
import AOS from "aos";
import "aos/dist/aos.css";

import {
  Box,
  Button,
  Grid,
  Heading,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { BsGithub } from "react-icons/bs";
const GitHub = (props) => {
  const { checkTheme, GithubScroll } = props;

  const [theme, setTheme] = useState({});
  const [theme1, setTheme1] = useState({});

  // --------------- (Animation)--------------
  useEffect(() => {
    AOS.init({ offset: 300, duration: 1000 });
  }, []);

  useEffect(() => {
    if (checkTheme) {
      setTheme1({
        color: "white",
        backgroundColor: "#0f1624",
      });
    } else {
      setTheme1({
        color: "black",
        backgroundColor: "#edf2f8",
      });
    }
  }, [checkTheme]);

  // =================== Theme 2 =====================>
  useEffect(() => {
    if (checkTheme) {
      setTheme({
        color: "white",
        backgroundColor: "#1a202c",
      });
    } else {
      setTheme({
        color: "black",
        backgroundColor: "#ffffff",
      });
    }
  }, [checkTheme]);

  return (
    <Grid ref={GithubScroll} pb="8%" style={theme}>
      <Heading pt="5%" mb="4%">
        GitHub{" "}
        <span style={{ color: "#fe9119" }}>
          Overview{" "}
          <a
            href="https://github.com/Abhishek07788"
            target="_blank"
            rel="noreferrer"
          >
            <Button
              fontSize={["30px", "30px", "35px", "35px"]}
              p={0}
              borderRadius="50%"
              transition="all .3s ease-in-out"
              ml="-1"
              mb="1"
              _hover={{
                transform: "scale(1.1)",
                border: "1px solid #3f3d55",
                bg: "#ffff",
                color: "#3f3d55",
              }}
            >
              <BsGithub />
            </Button>
          </a>
        </span>
      </Heading>

    {/* -------- ( Graph Chart ) ---------- */}
      {/* <Image
        data-aos="zoom-in"
        style={theme1}
        w={["80%", "80%", "80%", "70%"]}
        m="auto"
        border="1px solid #fe9119"
        p="5px"
        borderRadius="10px"
        bg="transparent"
        transition="all .5s ease-in-out"
        _hover={{
          transform: "scale(1.1)",
          boxShadow:
            "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
        }}
        src={
          checkTheme
            ? "https://activity-graph.herokuapp.com/graph?username=Abhishek07788&theme=github"
            : "https://activity-graph.herokuapp.com/graph?username=Abhishek07788&"
        }
      /> */}

      <Box data-aos="zoom-in" w={["80%", "80%", "80%", "70%"]} m="auto" mt="5">
        <Box
          data-aos="zoom-in"
          display={["grid", "grid", "grid", "flex"]}
          w="100%"
          gap={5}
        >
          {/* -------- ( Stats ) ---------- */}
          <Image
            style={theme1}
            w={["100%"]}
            m="auto"
            border="1px solid #fe9119"
            padding={"5px"}
            borderRadius="10px"
            className="github_Calender"
            transition="all .5s ease-in-out"
            _hover={{
              transform: "scale(1.1)",
              boxShadow:
                "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
            }}
            src={
              checkTheme
                ? "https://github-readme-stats.vercel.app/api?username=abhishek07788&show_icons=true&locale=en&theme=tokyonight"
                : "https://github-readme-stats.vercel.app/api?username=abhishek07788&show_icons=true&locale=en&"
            }
            alt="abhishek07788"
          />

          {/* -------- (Current Streak) ---------- */}
          <Image
            style={theme1}
            w={["100%"]}
            m="auto"
            border="1px solid #fe9119"
            padding={"5px"}
            borderRadius="10px"
            className="github_Calender"
            transition="all .5s ease-in-out"
            _hover={{
              transform: "scale(1.1)",
              boxShadow:
                "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
            }}
            src={
              checkTheme
                ? "https://github-readme-streak-stats.herokuapp.com/?user=abhishek07788&show_icons=true&locale=en&theme=tokyonight"
                : "https://github-readme-streak-stats.herokuapp.com/?user=abhishek07788&show_icons=true&locale=en&"
            }
            alt="abhishek07788"
          />
        </Box>
        <Box
          display={["grid", "grid", "grid", "flex"]}
          w={"100%"}
          gap={5}
          mt="5"
        >
          {/* -------- (Calender) ---------- */}
          <Box
            overflow={"hidden"}
            color={checkTheme ? "white" : "black"}
            bg={checkTheme ? "#1a202c" : "#ffffff"}
            w={["100%"]}
            m="auto"
            border="1px solid #fe9119"
            p={"20px"}
            pt={["45px", "45px", "72px", "72px"]}
            pb={["45px", "45px", "72px", "72px"]}
            borderRadius="10px"
            className="github_Calender"
            transition="all .5s ease-in-out"
            _hover={{
              transform: "scale(1.1)",
              boxShadow:
                "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
            }}
          >
            <GitHubCalendar
              style={{
                margin: "auto",
              }}
              username="Abhishek07788"
              year={new Date().getFullYear()}
            />
          </Box>

          {/* -------- (Most use language) ---------- */}
          <Image
            style={theme1}
            w={["100%", "100%", "103%", "103%"]}
            m="auto"
            border="1px solid #fe9119"
            padding={"5px"}
            borderRadius="10px"
            className="github_Calender"
            transition="all .5s ease-in-out"
            _hover={{
              transform: "scale(1.1)",
              boxShadow:
                "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
            }}
            src={
              checkTheme
                ? "https://github-readme-stats.vercel.app/api/top-langs?username=abhishek07788&show_icons=true&locale=en&layout=compact&theme=tokyonight"
                : "https://github-readme-stats.vercel.app/api/top-langs?username=abhishek07788&show_icons=true&locale=en&layout=compact&"
            }
            alt="Abhishek07788"
          />
        </Box>
      </Box>
      {/* =============== ( STATISTICS SECTION ) =============== */}
      <SimpleGrid
        columns={[2, 2, 4, 4]}
        w="80%"
        m="auto"
        gap="8"
        mt="14"
        alignItems={"center"}
        alignContent="center"
        data-aos="zoom-in"
      >
        <Box
          style={theme1}
          borderRadius={"50"}
          p="5"
          border="1px solid #fe9119"
          boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
          transition="all .5s ease-in-out"
          _hover={{
            transform: "scale(1.1)",
            boxShadow:
              "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
          }}
        >
          <Heading color={"#fe9119"}>1200+</Heading>
          <Heading fontSize={["25","28","30","35"]} fontsize="10">Hours</Heading>
          <Text mt="3">Coding</Text>
        </Box>
        <Box
          style={theme1}
          borderRadius={"50"}
          p="5"
          border="1px solid #fe9119"
          boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
          transition="all .5s ease-in-out"
          _hover={{
            transform: "scale(1.1)",
            boxShadow:
              "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
          }}
        >
          <Heading color={"#fe9119"}>8+</Heading>
          <Heading fontSize={["25","28","30","35"]} fontsize="10">Projects</Heading>
          <Text mt="3">Done</Text>
        </Box>
        <Box
          style={theme1}
          borderRadius={"50"}
          p="5"
          border="1px solid #fe9119"
          boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
          transition="all .5s ease-in-out"
          _hover={{
            transform: "scale(1.1)",
            boxShadow:
              "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
          }}
        >
          <Heading color={"#fe9119"}>460+</Heading>
          <Heading fontSize={["25","28","30","35"]} fontsize="10">DSA</Heading>
          <Text mt="3">Solved (OJ)</Text>
        </Box>
        <Box
          style={theme1}
          borderRadius={"50"}
          p="5"
          border="1px solid #fe9119"
          boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
          transition="all .5s ease-in-out"
          _hover={{
            transform: "scale(1.1)",
            boxShadow:
              "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
          }}
        >
          <Heading color={"#fe9119"}>1000+</Heading>
          <Heading fontSize={["25","28","30","35"]}>Hours</Heading>
          <Text mt="3">DSA</Text>
        </Box>
      </SimpleGrid>
    </Grid>
  );
};

export default GitHub;
