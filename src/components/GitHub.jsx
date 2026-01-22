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
import { data } from "../data/data";
const GitHub = (props) => {
  const { checkTheme, GithubScroll } = props;

  const [theme, setTheme] = useState({});
  const [theme1, setTheme1] = useState({});

  // ===== Year Filter State =====
  const currentYear = new Date().getFullYear();
  const years = Array.from(
    { length: currentYear - 2021 },
    (_, i) => 2022 + i
  );
  const [selectedYear, setSelectedYear] = useState(currentYear);

  // ===== AOS Animation =====
  useEffect(() => {
    AOS.init({ offset: 300, duration: 1000 });
  }, []);

  // ===== Theme 1 =====
  useEffect(() => {
    setTheme1(
      checkTheme
        ? { color: "white", backgroundColor: "#0f1624" }
        : { color: "black", backgroundColor: "#edf2f8" }
    );
  }, [checkTheme]);

  // ===== Theme 2 =====
  useEffect(() => {
    setTheme(
      checkTheme
        ? { color: "white", backgroundColor: "#1a202c" }
        : { color: "black", backgroundColor: "#ffffff" }
    );
  }, [checkTheme]);

  return (
    <Grid ref={GithubScroll} pb="8%" style={theme}>
      {/* ================= HEADER ================= */}
      <Heading pt="5%" mb="4%">
        GitHub{" "}
        <span style={{ color: data.universal.color }}>
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
              ml="-1"
              mb="1"
              transition="all .3s ease-in-out"
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

      {/* ================= GRAPH ================= */}
      <Image
        data-aos="zoom-in"
        style={theme1}
        w={["80%", "80%", "80%", "70%"]}
        m="auto"
        border={`1px solid ${data.universal.color}`}
        p="5px"
        borderRadius="10px"
        transition="all .5s ease-in-out"
        _hover={{
          transform: "scale(1.1)",
          boxShadow:
            "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px",
        }}
        src={
          checkTheme
            ? data.github.graphChart.light_theme_link
            : data.github.graphChart.dark_theme_link
        }
      />

      {/* ================= STATS + CALENDAR ================= */}
      <Box data-aos="zoom-in" w={["80%", "80%", "80%", "70%"]} m="auto" mt="5">
        <SimpleGrid columns={[1, 1, 2, 2]} data-aos="zoom-in" w="100%" gap={5}>
          {/* -------- ( Stats ) ---------- */}
          {data.github.github_stats.map((item, index) => (
            <Image
              key={index}
              style={theme1}
              w={["100%"]}
              m="auto"
              border={`1px solid ${data.universal.color}`}
              padding={"5px"}
              borderRadius="10px"
              className="github_Calender"
              transition="all .5s ease-in-out"
              _hover={{
                transform: "scale(1.1)",
                boxShadow:
                  "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
              }}
              src={checkTheme ? item.light_theme_link : item.dark_theme_link}
              alt="github Stack"
            />
          ))}

          {/* ================= YEAR FILTER ================= */}
          <Box
            overflow="hidden"
            color={checkTheme ? "white" : "black"}
            bg={checkTheme ? "#1a202c" : "#ffffff"}
            w={["100%"]}
            m="auto"
            border={`1px solid ${data.universal.color}`}
            p={"20px"}
            pt={["25px", "25px", "22px", "80px"]}
            pb={["25px", "25px", "22px", "80px"]}
            borderRadius="10px"
            title="GitHub Calender"
            className="github_Calender"
            transition="all .5s ease-in-out"
            _hover={{
              transform: "scale(1.1)",
              boxShadow:
                "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
            }}
          >
            {/* ---- Year Chips ---- */}
            <Box
              display="flex"
              justifyContent="center"
              flexWrap="wrap"
              gap={2}
              mb={6}
            >
              {years.map((year) => (
                <Button
                  key={year}
                  size="xs"
                  borderRadius="full"
                  variant={selectedYear === year ? "solid" : "outline"}
                  bg={
                    selectedYear === year
                      ? data.universal.color
                      : "transparent"
                  }
                  color={
                    selectedYear === year
                      ? "white"
                      : checkTheme
                        ? "white"
                        : "black"
                  }
                  border={`1px solid ${data.universal.color}`}
                  _hover={{
                    bg: data.universal.color,
                    color: "white",
                  }}
                  onClick={() => setSelectedYear(year)}
                >
                  {year}
                </Button>
              ))}
            </Box>

            {/* ---- GitHub Calendar ---- */}
            <GitHubCalendar
              username="Abhishek07788"
              year={selectedYear}
              style={{ margin: "auto" }}
            />
          </Box>
        </SimpleGrid>
        <Box
          display={["grid", "grid", "grid", "flex"]}
          w={"100%"}
          gap={5}
          mt="5"
        ></Box>
      </Box>

      {/* ================= FINAL STATS ================= */}
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
        {data.github.stats.map((item, index) => (
          <Box
            key={index}
            style={theme1}
            borderRadius={"50"}
            p="5"
            border={`1px solid ${data.universal.color}`}
            boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
            transition="all .5s ease-in-out"
            _hover={{
              transform: "scale(1.1)",
              boxShadow:
                "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
            }}
          >
            <Heading color={data.universal.color}>{item.number}+</Heading>
            <Heading fontSize={["25", "28", "30", "35"]}>
              {item.title}
            </Heading>
            <Text mt="3">{item.subTitle}</Text>
          </Box>
        ))}
      </SimpleGrid>
    </Grid>
  );
};

export default GitHub;
