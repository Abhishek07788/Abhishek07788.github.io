import {
  SimpleGrid,
  Heading,
  Image,
  ListItem,
  ListIcon,
  List,
} from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";
import React, { useEffect } from "react";
import { useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const About = (props) => {
  const { checkTheme,aboutScroll } = props;
  const [theme, setTheme] = useState({});

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

  return (
    <div ref={aboutScroll} className="mainDiv" style={theme}>
      <Heading fontSize={40} color={"#fe9119"}>
        About <span style={theme}>Me</span>
      </Heading>

      {/*======================== Main Div ======================= */}

      <SimpleGrid pb={"10%"} m={"auto"} mt={"5%"} columns={[1, 1, 1, 2]}>
        {/*======================== Coding Gif ======================= */}

        <Image
          data-aos="zoom-in"
          m={"auto"}
          w={["83%", "83%", "83%", "80%"]}
          src="https://www.slnsoftwares.com/images/gif/working_man.gif"
          alt="Projects"
        />

        {/*======================== LISt me Main div ======================= */}

        <SimpleGrid data-aos="zoom-in">
          {/*======================== List ======================= */}

          <List
            m={"auto"}
            w={["70%", "70%", "80%", "85%"]}
            fontSize={["14px", "15px", "20px", "19px"]}
            lineHeight="24px"
            mt={"5%"}
            textAlign={"left"}
            className="AboutList"
          >
            <ListItem mt={3}>
              <ListIcon as={CheckCircleIcon} color="#fe9119" />
              Hello, My name is <b>Abhishek Pratap Solanki </b> and I enjoy
              creating thing that live on the internet.
            </ListItem>
            <ListItem mt={3}>
              <ListIcon as={CheckCircleIcon} color="#fe9119" />
              Quick learner and an aspiring full-stack web developer with core
              knowledge of MERN stack technology. Looking forward to applying
              and enhancing my skills and knowledge as a developer.
            </ListItem>
            <ListItem mt={3}>
              <ListIcon as={CheckCircleIcon} color="#fe9119" />
              <b>Full Stack Developer </b>with hands on experience in
              building cool React Apps. Works efficiently both in frontend as
              well as backend and is proficient in Data Structure and Algorithms
              with good problem solving skills.
            </ListItem>
            <ListItem mt={3}>
              <ListIcon as={CheckCircleIcon} color="#fe9119" />I built 4 major
              projects. Learned a great deal about teamwork, leadership, and
              communication. After months of rigorous traning, here I am looking
              for an opportunity as a full Stack web Developer.
            </ListItem>
          </List>
        </SimpleGrid>
      </SimpleGrid>
    </div>
  );
};
export default About;
