import { SimpleGrid, Box, Heading, Text, Image } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { data } from "../data/data";

const Skills = (props) => {
  const { checkTheme, skillScroll } = props;
  const [theme, setTheme] = useState({});
  const [theme1, setTheme1] = useState({});

  // ======== Animation =========>

  useEffect(() => {
    AOS.init({ offset: 300, duration: 1000 });
  }, []);

  // ======== Theme 1 ===========>

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

  // ======= Theme 2 ============>

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
    <div ref={skillScroll} className="mainDiv" style={theme}>
      <Heading fontSize={[35, 35, 40, 40]}>
        My <span style={{ color: data.universal.color }}>Technical </span>Skills
      </Heading>

      {/* ======== All Skills ======== */}

      <SimpleGrid
        w={"80%"}
        m="auto"
        mt={"80px"}
        columns={[2, 2, 3, 6]}
        spacing="40px"
        fontSize={["none", "none", "18", "none"]}
        className="SkillsDiv"
        pb={"100px"}
      >
        {data.skills.map((skill, index) => (
          <Box
            key={index}
            data-aos="zoom-in"
            borderRadius={10}
            p={4}
            w={["70%", "70%", "100%"]}
            m="auto"
            display="grid"
            style={theme1}
          >
            <Image
              w={"110px"}
              h={["auto", "auto", 110, 110]}
              borderRadius={10}
              m="auto"
              mb={2}
              mixBlendMode={"dark"}
              src={skill.image}
              alt={skill.name}
            />
            <Text>{skill.name}</Text>
          </Box>
        ))}
      </SimpleGrid>
    </div>
  );
};
export default Skills;
