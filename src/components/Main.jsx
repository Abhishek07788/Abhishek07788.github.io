import React, { useContext } from "react";
import { useState } from "react";
import Home from "./Home";
import { SimpleGrid, Box, Heading, Text, Image } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Appcontext } from "./Darkmode";
import { useEffect } from "react";

const Main = () => {
    const {darktheme} = useContext(Appcontext);
    const [checkTheme, setCheckTheme] = useState(false)
    const [theme, setTheme] = useState({})
    // console.log('theme: ', theme);


    useEffect(()=>{
        if(checkTheme){
            setTheme(darktheme.dark)
        }else{
            setTheme(darktheme.light)
        }
    },[checkTheme])

    
  return (
    <div>
        <div>
        <SimpleGrid bg={"#edf2f8"} columns={2} spacing={10} style={theme}>
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
            style={theme}
          >
            <Text className="navH">HOME</Text>
            <Text className="navH">ABOUT</Text>
            <Text className="navH">WORK</Text>
            <Text className="navH">CONTACT</Text>
            <a href="https://drive.google.com/file/d/1tCg8poSlmD-uHdvAUT2vjEdVFW_Dd_fe/view?usp=sharing">
              <Text className="navH">RESUME</Text></a>
            <Box border={"2px solid #fe9119"} borderRadius="10px" w="50px" onClick={()=> setCheckTheme(!checkTheme)}>
              {(checkTheme) ? (<SunIcon ml={0} fontSize={"35px"} />) : (<MoonIcon ml={0} fontSize={"35px"} />)}
            </Box>
          </SimpleGrid>
        </SimpleGrid>
      </div>
      <Home theme={theme}/>
    </div>
  );
};

export default Main;
