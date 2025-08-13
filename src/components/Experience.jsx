import React, { useEffect, useState } from "react";
import "../css/main.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Box, Container, Heading, Text } from "@chakra-ui/react";
import { data } from "../data/data";

const Experience = (props) => {
  const { checkTheme, experienceScroll } = props;
  const [theme, setTheme] = useState({});
  const [theme1, setTheme1] = useState({});

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
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
    <div ref={experienceScroll} className="mainDivProject" style={theme}>
        <Heading fontSize={40} mb={6}>
          Experience <span style={{ color: data.universal.color }}>({data.experience.total}+ Yrs)</span>
        </Heading>

        <div className="timeline">
          {data.experience.companies.map((item, index) => (
            <div
              key={index}
              className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
              data-aos="zoom-in"
            >
              <Box
                className="timeline-content"
                style={theme1}
                borderWidth="1px"
                borderColor={data.universal.color + "30"}
              >
                <Text
                  className="date"
                  color={data.universal.color}
                  fontWeight="bold"
                >
                  {item.duration}
                </Text>
                <Text
                  fontSize="xl"
                  fontWeight="bold"
                  style={{ color: checkTheme ? "white" : "black" }}
                  mb={2}
                >
                  {item.company}
                </Text>
                <Text
                  fontSize="lg"
                  color={data.universal.color}
                  fontWeight="semibold"
                  mb={4}
                >
                  {item.role}
                </Text>
                <Box as="ul" styleType="none">
                  {item.description.map((desc, idx) => (
                    <Text
                      as="li"
                      key={idx}
                      style={{ color: checkTheme ? "white" : "black" }}
                      mb={2}
                      fontSize="sm"
                    >
                      {desc}
                    </Text>
                  ))}
                </Box>
              </Box>
            </div>
          ))}
        </div>
    </div>
  );
};

export default Experience;