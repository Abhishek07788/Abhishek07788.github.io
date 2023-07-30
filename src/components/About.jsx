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
import { data } from "../data/data";

const About = (props) => {
  const { checkTheme, aboutScroll } = props;
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
      <Heading fontSize={40} color={data.universal.color}>
        About <span style={theme}>Me</span>
      </Heading>

      {/*======================== Main Div ======================= */}

      <SimpleGrid pb={"10%"} m={"auto"} mt={"5%"} columns={[1, 1, 1, 2]}>
        {/*======================== Coding Gif ======================= */}

        <Image
          data-aos="zoom-in"
          m={"auto"}
          mt={["-10%"]}
          w={["83%", "83%", "83%", "80%"]}
          src={data.about_me.image}
          alt="About me"
        />

        {/*============ Content =========== */}
        <List
          data-aos="zoom-in"
          m={"auto"}
          w={["70%", "70%", "80%", "85%"]}
          fontSize={["14px", "15px", "20px", "19px"]}
          lineHeight="24px"
          mt={"5%"}
          textAlign={"left"}
          className="AboutList"
        >
          {data.about_me.contents &&
            data.about_me.contents.map((item, i) => (
              <ListItem key={i} mt={6}>
                <ListIcon as={CheckCircleIcon} color={data.universal.color} />
                {item.content}
              </ListItem>
            ))}
        </List>
      </SimpleGrid>
    </div>
  );
};
export default About;
