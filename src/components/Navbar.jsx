import React from "react";
import { SimpleGrid, Box, Heading, Text, Image } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

const Navbar = (props) => {

  const {checkTheme,setcheckTheme} = props;
  console.log('setcheckTheme: ', checkTheme);

  return (
    <div>
      <div>
        <SimpleGrid bg={"#edf2f8"} columns={2} spacing={10}>
          <Heading
            p={3}
            fontSize={"40px"}
            ml={5}
            textAlign={"left"}
            fontWeight={700}
          >
            AHI
            <span
              style={{
                color: "#fe9119",
              }}
            >
              SHEK
            </span>
          </Heading>
          <SimpleGrid
            mr={5}
            fontSize={"19px"}
            fontWeight={600}
            alignItems={"center"}
            columns={6}
            spacing={0}
          >
            <Text className="navH">HOME</Text>
            <Text className="navH">ABOUT</Text>
            <Text className="navH">WORK</Text>
            <Text className="navH">CONTACT</Text>
            <a href="https://drive.google.com/file/d/1tCg8poSlmD-uHdvAUT2vjEdVFW_Dd_fe/view?usp=sharing">
              <Text className="navH">RESUME</Text></a>
            <Box bg={"grey"} w="50px" onClick={()=> setcheckTheme(!checkTheme)}>
              {(checkTheme) ? (<SunIcon ml={-10} fontSize={"35px"} />): (<MoonIcon ml={0} fontSize={"35px"} />)}
            </Box>
          </SimpleGrid>
        </SimpleGrid>
      </div>
    </div>
  );
};

export default Navbar;
