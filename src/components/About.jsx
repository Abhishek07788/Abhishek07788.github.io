import {
  SimpleGrid,
  Box,
  Heading,
  Text,
  Image,
  ListItem,
  UnorderedList,
  ListIcon,
  List,
} from "@chakra-ui/react";
import { ViewIcon, CheckCircleIcon } from "@chakra-ui/icons";
import React, { useEffect } from "react";
import { useState } from "react";

const About = (props) => {
  const { checkTheme } = props;
  const [theme, setTheme] = useState({});
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
    <div className="mainDiv" style={theme}>
      <Heading fontSize={40} color={"#fe9119"}>
        About <span style={theme}>Me</span>
      </Heading>
      <SimpleGrid pb={"10%"} m={"auto"} mt={"5%"} columns={[1, 1, 2]}>
        <Image
          m={"auto"}
          w={["70%", "80%", "80%"]}
          src="https://www.slnsoftwares.com/images/gif/working_man.gif"
          alt="Projects"
        />
        <SimpleGrid>
          <List
            m={"auto"}
            w={"85%"}
            fontSize={"19px"}
            lineHeight="24px"
            mt={"5%"}
            textAlign={"left"}
            className="AboutList"
          >
            <ListItem mt={3}>
              <ListIcon
                as={CheckCircleIcon}
                color="#fe9119"
              />
              Hello, My name is <b>Abhishek Pratap Solanki </b> and I enjoy
              creating thing that live on the internet.
            </ListItem>
            <ListItem mt={3}>
              <ListIcon
                as={CheckCircleIcon}
                color="#fe9119"
              />  
              I have complated Bachelor of Science, Graduation from DR. BHIMRAO
              AMBEDKAR UNIVERSITY, AGRA from <b>2019 to 2022 </b>, Apart from
              graduation I have also completed a 1 year <b>O Level </b>Nielit
              computer diploma. Where I learned the <b>C language </b>and basics
              of Computer. from <b>2019 to 2020</b>
            </ListItem>
            <ListItem mt={3}>
              <ListIcon
                as={CheckCircleIcon}
                color="#fe9119"
              />  
              I'm a <b>Full Stack Developer </b>with hands on experience in
              building cool React Apps. Works efficiently both in frontend as
              well as backend and is proficient in Data Structure and Algorithms
              with good problem solving skills.
            </ListItem>
            <ListItem mt={3}>
              <ListIcon
                as={CheckCircleIcon}
                color="#fe9119"
              />  
              I built 4 major projects. Learned a great deal about teamwork,
              leadership, and communication. After months of rigorous traning,
              here I am looking for an opportunity as a full Stack web
              Developer.
            </ListItem>
          </List>
        </SimpleGrid>
      </SimpleGrid>
    </div>
  );
};
export default About;
