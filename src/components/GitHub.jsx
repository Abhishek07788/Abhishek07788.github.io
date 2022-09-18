import React from "react";
import GitHubCalendar from "react-github-calendar";
// import "./GitHub.css";

import { Box, Heading } from "@chakra-ui/react";
const GitHub = () => {
  const github = {
    margin: "auto",
    border: "5px solid #fe9119",
    // width: "100%",
    padding: "20px",
    borderRadius: "10px",
  };

  return (
    <div>
      <Heading mb={4} mt="8%">
        My GitHub <span style={{color:"#fe9119"}}>Calender</span>
      </Heading>
      <Box w={["80%", "80%", "70%"]} style={github} className="github_Calender">
        <GitHubCalendar
          style={{ margin: "auto" }}
          username="Abhishek07788"
          year={new Date().getFullYear()}
        />
      </Box>
    </div>
  );
};

export default GitHub;
