import { SimpleGrid, Box, Heading, Text, Image } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { data } from "../data/data";

const Skills = (props) => {
  const { checkTheme, skillScroll } = props;
  const [theme, setTheme] = useState({});
  const [theme1, setTheme1] = useState({});
  const [activeTab, setActiveTab] = useState("all");

  // Animation
  useEffect(() => {
    AOS.init({ offset: 300, duration: 1000 });
  }, []);

  // Theme for skill cards
  useEffect(() => {
    setTheme1(
      checkTheme
        ? { color: "white", backgroundColor: "#1a202c" }
        : { color: "black", backgroundColor: "#ffffff" }
    );
  }, [checkTheme]);

  // Theme for whole section
  useEffect(() => {
    setTheme(
      checkTheme
        ? { color: "white", backgroundColor: "#0f1624" }
        : { color: "black", backgroundColor: "#edf2f8" }
    );
  }, [checkTheme]);

  // Filtering Logic
  const filteredSkills =
    activeTab === "all"
      ? data.skills
      : data.skills.filter((skill) => skill.category === activeTab);

  return (
    <div ref={skillScroll} className="mainDiv" style={theme}>
      <Heading fontSize={[35, 35, 40, 40]}>
        My <span style={{ color: data.universal.color }}>Technical </span>Skills
      </Heading>

      {/* -------- Tabs -------- */}
      <Box mt="34px" mb="12px" display="flex" justifyContent="center" gap="8px">
        {["all", "frontend", "backend", "tools", "ai"].map((tab) => (
            <button
              key={tab}
              style={{
                padding: activeTab === tab ? "4px 10px" : "2px 8px", // base size
                borderRadius: "4px",
                border: "1px solid",
                background:
                  activeTab === tab ? data.universal.color : "transparent",
                color: activeTab === tab ? "white" : theme1.color,
                cursor: "pointer",
                fontWeight: "500",
                fontSize: window.innerWidth < 480 ? "10px" : "12px", // ✅ smaller on phones
                transition: "0.3s",
              }}
              onClick={() => setActiveTab(tab)}
            >
            {tab === "all"
              ? "All"
              : tab === "frontend"
              ? "Frontend"
              : tab === "backend"
              ? "Backend"
              : tab === "tools"
              ? "Tools"
              : "AI Tools"}
          </button>
        ))}
      </Box>

      {/* -------- Skills Grid -------- */}
      <SimpleGrid
        w="80%"
        m="auto"
        mt="40px"
        columns={[2, 2, 3, 6]}
        spacing="40px"
        pb="100px"
      >
        {filteredSkills.map((skill, index) => (
          <Box
            key={index}
            data-aos="zoom-in"
            borderRadius={10}
            p={4}
            display="grid"
            style={theme1}
            textAlign="center"
            transition="0.3s"
            _hover={{
              transform: "scale(1.07)",
              boxShadow: "0 4px 15px rgba(0, 0, 0, 0.25)",
            }}
          >
            <Image
              w="110px"
              h={["auto", "auto", 110, 110]}
              borderRadius={10}
              m="auto"
              mb={2}
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