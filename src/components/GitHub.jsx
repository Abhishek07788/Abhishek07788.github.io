import React from "react";
import GitHubCalendar from "react-github-calendar";
// import "./GitHub.css";

import { Box, Heading } from "@chakra-ui/react";
const GitHub = ({ theme1 }) => {
  return (
    <div>
      <Heading mb={6} mt="8%">
        My GitHub <span style={{ color: "#fe9119" }}>Calender</span>
      </Heading>
      <Box
        style={theme1}
        w={["80%", "80%", "70%"]}
        m="auto"
        border="3px solid #fe9119"
        padding={"20px"}
        borderRadius="10px"
        className="github_Calender"
        transition="all .8s ease-in-out"
        _hover={{
          transform: "scale(1.2)",
        }}
      >
        <GitHubCalendar
          style={{
            margin:"auto",
          }}
          username="Abhishek07788"
          year={new Date().getFullYear()}
        />
      </Box>
    </div>
  );
};

export default GitHub;
