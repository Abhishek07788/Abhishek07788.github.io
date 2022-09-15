import {
  SimpleGrid,
  Box,
  Heading,
  Text,
  Image,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import html from "../Image/html.svg"
import css from "../Image/css.svg"
import javascript from "../Image/javascript.svg"
import react from "../Image/react.svg"
import chakraui from "../Image/chakraui.png"
import mongodb from "../Image/mongodb.svg"
import mongoose from "../Image/mongoose.png"
import express from "../Image/express.svg"
import nodejs from "../Image/nodejs.svg"
import git from "../Image/git.svg"
import materialui from "../Image/materialui.svg"
import npm from "../Image/npm.svg"
import postman from "../Image/postman.png"
import redux from "../Image/redux.svg"
import bootstrap from "../Image/bootstrap.svg"







const Skills = (props) => {
  
  const { checkTheme,skillScroll } = props;
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
        backgroundColor: "#1a202c",
      });
    } else {
      setTheme({
        color: "black",
        backgroundColor: "#ffffff",
      });
    }
  }, [checkTheme]);


  // =================== Theme 2 =====================>

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

  return (
    <div ref={skillScroll} className="mainDiv" style={theme}>
      <Heading fontSize={40}>
        My <span style={{ color: "#fe9119" }}>Technical </span>Skills
      </Heading>



    {/* =================== All Skills ================= */}

      <SimpleGrid
        w={"80%"}
        m="auto"
        mt={"80px"}
        columns={[2, 2,3, 7]}
        spacing="40px"
        fontSize={["none","none","18","none"]}
        className="SkillsDiv"
        pb={"100px"}
      >
        
        <Box
        data-aos="zoom-in" borderRadius={10} p={4} w={["70%","70%","100%"]} m="auto" display="grid" style={theme1}>
        <Image w={"110px"} m="auto" mb={2} src={html} alt="html"/>
        <Text>HTML</Text>
        </Box>
        <Box  data-aos="zoom-in" borderRadius={10} p={4} w={["70%","70%","100%"]} m="auto" display="grid" style={theme1}>
        <Image w={"110px"} m="auto" mb={2} src={css} alt="css"/>
        <Text>CSS</Text>
        </Box>
        <Box  data-aos="zoom-in" borderRadius={10} p={4} w={["70%","70%","100%"]} m="auto" display="grid" style={theme1}>
        <Image w={"110px"} m="auto" mb={2} src={javascript} alt="javascript"/>
        <Text>JavaScript</Text>
        </Box>
        <Box  data-aos="zoom-in" borderRadius={10} p={4} w={["70%","70%","100%"]} m="auto" display="grid" style={theme1}>
        <Image w={"110px"} m="auto" mb={2} src={react} alt="react"/>
        <Text>React</Text>
        </Box>
        <Box  data-aos="zoom-in" borderRadius={10} p={4} w={["70%","70%","100%"]} m="auto" display="grid" style={theme1}>
        <Image w={"110px"} m="auto" mb={2} src={chakraui} alt="chakraui"/>
        <Text>Chakra UI</Text>
        </Box>
        <Box  data-aos="zoom-in" borderRadius={10} p={4} w={["70%","70%","100%"]} m="auto" display="grid" style={theme1}>
        <Image w={"110px"} m="auto" mb={2} src={mongodb} alt="mongodb"/>
        <Text>Mongo DB</Text>
        </Box>
        <Box  data-aos="zoom-in" borderRadius={10} p={4} w={["70%","70%","100%"]} m="auto" display="grid" style={theme1}>
        <Image w={"110px"} m="auto" mb={2} src={mongoose} alt="mongoose"/>
        <Text>Mongoose</Text>
        </Box>
        <Box  data-aos="zoom-in" borderRadius={10} p={4} w={["70%","70%","100%"]} m="auto" display="grid" style={theme1}>
        <Image w={"110px"} m="auto" mb={2} src={express} alt="express"/>
        <Text>Express</Text>
        </Box>
        <Box  data-aos="zoom-in" borderRadius={10} p={4} w={["70%","70%","100%"]} m="auto" display="grid" style={theme1}>
        <Image w={"110px"} m="auto" mb={2} src={nodejs} alt="nodejs"/>
        <Text>Node JS</Text>
        </Box>
        <Box  data-aos="zoom-in" borderRadius={10} p={4} w={["70%","70%","100%"]} m="auto" display="grid" style={theme1}>
        <Image w={"110px"} m="auto" mb={2} src={git} alt="git"/>
        <Text>Git</Text>
        </Box>
        {/* <Box  data-aos="zoom-in" borderRadius={10} p={4} w={["70%","70%","100%"]} m="auto" display="grid" style={theme1}>
        <Image w={"110px"} m="auto" mb={2} src={materialui} alt="materialui"/>
        <Text>Material UI</Text>
        </Box> */}
        <Box  data-aos="zoom-in" borderRadius={10} p={4} w={["70%","70%","100%"]} m="auto" display="grid" style={theme1}>
        <Image w={"110px"} m="auto" mb={2} src={npm} alt="npm"/>
        <Text>NPM</Text>
        </Box>
        <Box  data-aos="zoom-in" borderRadius={10} p={4} w={["70%","70%","100%"]} m="auto" display="grid" style={theme1}>
        <Image w={"110px"} m="auto" mb={2} src={postman} alt="postman"/>
        <Text>Post Man</Text>
        </Box>
        <Box  data-aos="zoom-in" borderRadius={10} p={4} w={["70%","70%","100%"]} m="auto" display="grid" style={theme1}>
        <Image w={"110px"} m="auto" mb={2} src={redux} alt="redux"/>
        <Text>Redux</Text>
        </Box>
        <Box  data-aos="zoom-in" borderRadius={10} p={4} w={["70%","70%","100%"]} m="auto" display="grid" style={theme1}>
        <Image w={"110px"} m="auto" mb={2} src={bootstrap} alt="bootstrap"/>
        <Text>Bootstrap</Text>
        </Box>
      </SimpleGrid>
    </div>
  );
};
export default Skills;
