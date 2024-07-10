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
import AOS from "aos";
import "aos/dist/aos.css";
import { data } from "../data/data";

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
        My <span style={{ color: data.universal.color }}>Projects</span>
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
        {data &&
          data.projects.map((item, index) => (
            <Box
              key={index}
              data-aos="zoom-in"
              borderRadius={10}
              p={4}
              style={theme1}
            >
              <Image
                h={["180px", "220px", 60, 72]}
                border={`2px solid ${data.universal.color}`}
                w={"100%"}
                borderRadius={10}
                src={item.image}
                alt="BeautyHub.in"
              />
              <Heading mt={4} fontSize={"22px"}>
                {item.name}
              </Heading>
              <Text
                fontSize={["14px", "14px", "19px", "17px"]}
                lineHeight={"21px"}
                w="99%"
                mt={2}
                textAlign={"left"}
              >
                {item.description}
              </Text>

              {item.is_group_project ? (
                <Text
                  mt={2}
                  textAlign={"left"}
                  fontSize={["14px", "14px", "19px", "17px"]}
                >
                  <b>Group Project: </b> {item.collaborators} Developers |{" "}
                  <b>Duration: </b> {item.duration}
                </Text>
              ) : (
                <Text
                  mt={2}
                  textAlign={"left"}
                  fontSize={["14px", "14px", "19px", "17px"]}
                >
                  <b>Individual Project </b>| <b>Duration: </b> {item.duration}
                </Text>
              )}
              <Text
                mt={2}
                textAlign={"left"}
                fontSize={["13px", "13px", "16px", "15px"]}
              >
                <span style={{ color: data.universal.color, fontSize: "16px" }}>
                  TECH STACKS:{" "}
                </span>
                {item.tech_stacks}
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
                {item.is_github_private ? (
                  <Box
                    title={"This repository is private for some reasons.🙂!"}
                    onClick={() =>
                      toast({
                        title:
                          "This repository is private for some reasons.🙂!",
                        status: "info",
                        duration: 8000,
                        isClosable: true,
                        position: "top-right",
                      })
                    }
                    _hover={{
                      color: data.universal.color,
                    }}
                  >
                    <BsGithub className="gitEye" style={{ marginTop: "3" }} />
                  </Box>
                ) : (
                  <a
                    title="GitHub Repository"
                    href={item.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Box
                      _hover={{
                        color: data.universal.color,
                      }}
                    >
                      <BsGithub className="gitEye" style={{ marginTop: "3" }} />
                    </Box>
                  </a>
                )}
                {item.video && (
                  <a
                    href={item.video}
                    target="_blank"
                    title={`Video ( ${item.video_watch_on} )`}
                    rel="noreferrer"
                  >
                    <Box
                      _hover={{
                        color: data.universal.color,
                      }}
                    >
                      <RiVideoFill mt={-1.5} className="gitEye" />
                    </Box>
                  </a>
                )}
                {item.deploy_link && (
                  <a
                    href={item.deploy_link}
                    target="_blank"
                    title={`Deployed on ${item.deployed_on}`}
                    rel="noreferrer"
                  >
                    <Box
                      _hover={{
                        color: data.universal.color,
                      }}
                    >
                      <HiEye mt={-1.5} className="gitEye" />
                    </Box>
                  </a>
                )}
              </Box>
            </Box>
          ))}
      </SimpleGrid>
    </div>
  );
};

export default Projects;
