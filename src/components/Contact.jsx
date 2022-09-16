import {
  SimpleGrid,
  Heading,
  Image,
  Box,
  Button,
  Input,
  Text,
  useToast,
  Textarea,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { AiFillLinkedin, AiFillGithub, AiOutlineMail } from "react-icons/ai";
import { FiPhoneCall } from "react-icons/fi";
import { BsPlusLg } from "react-icons/bs";
import { ImCross } from "react-icons/im";
import { FaRegArrowAltCircleUp } from "react-icons/fa";
import { useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import emailimg from "../Image/emailimg.png";
import emailjs from "emailjs-com";

const Contact = (props) => {
  const { checkTheme, contactScroll } = props;
  const [theme, setTheme] = useState({});
  const [theme1, setTheme1] = useState({});
  const [icon, setIcon] = useState(false);
  const [show, setShow] = useState({});
  const toast = useToast();


  //------------------------ Email Send --------------
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      "service_ml5brp5",
      "template_xe5tl5l",
      e.target,
      "_-SYa4AW4mbtbVQiF"
    ).then(res=>{
      console.log(res)
    }).catch((err)=>{
      console.log(err)
    })

    toast({
      title: "Thanks for contacting me.🙂",
      description: "I will reply you soon.",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
  };

  // =================== Animation =====================>

  useEffect(() => {
    AOS.init({ offset: 300, duration: 1000 });
  }, []);

  // ========= Right side Icon condition ===============>

  useEffect(() => {
    if (icon) {
      setShow({ display: "grid" });
    } else {
      setShow({ display: "none" });
    }
  }, [icon]);

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
    <div ref={contactScroll} className="mainDiv" style={theme}>
      <Heading fontSize={40} color="#fe9119">
        Contact <span style={theme}>Me</span>
      </Heading>
      <SimpleGrid columns={[1, 1, 1, 2]} pb="70px">
        {/* ================== Email and boy image ================== */}

        <Image
          mr={["auto", "auto", "auto", "-100px"]}
          data-aos="zoom-in"
          mt={30}
          m="auto"
          h={["300px", "300px", "420px", "450px"]}
          src={emailimg}
          alt="emailimg"
        />

        <SimpleGrid data-aos="zoom-in">
          {/* ================== Social midea Buttons ================== */}

          <Box display={"flex"} m="auto" gap={[2, 2, 7, 8]} mt="100px">
            <a
              href="http://www.linkedin.com/in/abhishekpratapsolanki"
              target="_blank"
            >
              <Button
                border="2px solid #0a66c2"
                fontSize={[14, 14, 14, 17]}
                color="#ffff"
                bg="#0a66c2"
                p={"0"}
                pl={[1, 1, 2, 3]}
                pr={[2, 2, 3, 4]}
                transition="all .4s ease-in-out"
                _hover={{
                  transform: "scale(1.1)",
                  bg: "#ffff",
                  color: "#0a66c2",
                }}
                data-aos="fade-right"
              >
                <AiFillLinkedin
                  style={{ marginRight: "4", fontSize: "20px" }}
                />
                Linkdin
              </Button>
            </a>
            <a href="https://github.com/Abhishek07788" target="_blank">
              <Button
                border="2px solid #3f3d55"
                fontSize={[14, 14, 14, 17]}
                color="#ffff"
                bg="#3f3d55"
                p={"0"}
                pl={[1, 1, 2, 3]}
                pr={[2, 2, 3, 4]}
                transition="all .4s ease-in-out"
                _hover={{
                  transform: "scale(1.1)",
                  bg: "#ffff",
                  color: "#3f3d55",
                }}
                data-aos="fade-right"
              >
                <AiFillGithub style={{ marginRight: "4", fontSize: "20px" }} />
                Github
              </Button>
            </a>
            <a href="mailto:abhisheksolanki1020@gmail.com">
              <Button
                border="2px solid #f04244"
                fontSize={[14, 14, 14, 17]}
                color="#ffff"
                bg="#f04244"
                p={"0"}
                pl={[1, 1, 2, 3]}
                pr={[2, 2, 3, 4]}
                transition="all .4s ease-in-out"
                _hover={{
                  transform: "scale(1.1)",
                  bg: "#ffff",
                  color: "#f04244",
                }}
                data-aos="fade-left"
              >
                <AiOutlineMail style={{ marginRight: "4", fontSize: "20px" }} />
                Email
              </Button>
            </a>
            <a href="tel:+919758207006">
              <Button
                border="2px solid #4db946"
                fontSize={[14, 14, 14, 17]}
                color="#ffff"
                bg="#4db946"
                p={"0"}
                pl={[1, 1, 0, 3]}
                pr={[1, 1, 0, 3]}
                transition="all .4s ease-in-out"
                _hover={{
                  transform: "scale(1.1)",
                  bg: "#ffff",
                  color: "#4db946",
                }}
                data-aos="fade-left"
              >
                <FiPhoneCall style={{ marginRight: "4", fontSize: "20px" }} />
              </Button>
            </a>
          </Box>

          {/* ================== Email Form ================== */}

          <Box m={"auto"} mt="15px" width="65%">
            <Heading
              data-aos="fade-right"
              fontSize={22}
              style={theme}
              textAlign="left"
            >
              Send me <span style={{ color: "#fe9119" }}>Message.</span>
            </Heading>
            <form onSubmit={sendEmail}>
              <Input
                // data-aos="fade-down"
                style={theme1}
                placeholder="Full Name"
                borderBottom={"1px solid grey"}
                size="md"
                required
                name="name"
                maxlength="40" 
              />
              <Input
                type={"email"}
                style={theme1}
                mt="16px"
                placeholder="Email"
                borderBottom={"1px solid grey"}
                // data-aos="fade-down"
                size="md"
                required
                name="email"
              />
              <Input
                type={"text"}
                style={theme1}
                mt="16px"
                placeholder="Phone"
                borderBottom={"1px solid grey"}
                size="md"
                required
                name="number"
                minlength="10"
                maxlength="10"  
                // data-aos="fade-down"
              />
              <Textarea
                style={theme1}
                id="Message"
                placeholder="Your Message"
                className="form-control"
                name="message"
                rows="5"
                required
              ></Textarea>

              {/* ===================== Reset button============ */}
              <Box display={"flex"} gap="3">
              <Input
                type={"submit"}
                border="2px solid #fe9119"
                fontSize={18}
                mt={1}
                color="black"
                bg="#fe9119"
                w="100%"
                transition="all .4s ease-in-out"
                _hover={{
                  bg: "#f04244",
                  color: "#ffff",
                  w:"95%"
                }}
              />
              <Button
               style={theme1}
               fontSize={17}
               borderBottom="1px"
               color="black"
               w="30%"
               mt={1}
               textDecoration={"underline"}
               pt={0}
               pb={0}
               transition="all .8s ease-in-out"
               textAlign="left"
               _hover={{
                w:"33%",
                color:"red"
               }}
              type="reset" onClick={()=> toast({
                title: "Form has been Reset !",
                status: "success",
                duration: 1000,
                isClosable: true,
              })}>Reset</Button>
              </Box>
            </form>
          </Box>
        </SimpleGrid>
      </SimpleGrid>

      {/* ================== Right side Icons ================== */}

      <Box
        position={"fixed"}
        zIndex={50}

        bottom="0"
        right="0"
        mr={[4, 4, 7, 4]}
        gap={3}
        pb={["80px", "80px", "160px", "80px"]}
        style={show}
      >
        <a
          href="http://www.linkedin.com/in/abhishekpratapsolanki"
          target="_blank"
        >
          <Button
            border="2px solid #0a66c2"
            color="#ffff"
            bg="#0a66c2"
            fontSize={["16px", "17px", "25px", "20px"]}
            p={[0, 0, "20px", 0]}
            pt={["none", "none", "25px", "none"]}
            pb={["none", "none", "25px", "none"]}
            borderRadius="50%"
            transition="all .4s ease-in-out"
            _hover={{
              transform: "scale(1.1)",
              bg: "#ffff",
              color: "#0a66c2",
            }}
          >
            <AiFillLinkedin />
          </Button>
        </a>
        <a href="https://github.com/Abhishek07788" target="_blank">
          <Button
            border="2px solid #3f3d55"
            color="#ffff"
            bg="#3f3d55"
            fontSize={["16px", "17px", "25px", "20px"]}
            p={[0, 0, "20px", 0]}
            pt={["none", "none", "25px", "none"]}
            pb={["none", "none", "25px", "none"]}
            borderRadius="50%"
            transition="all .4s ease-in-out"
            _hover={{
              transform: "scale(1.1)",
              bg: "#ffff",
              color: "#3f3d55",
            }}
          >
            <AiFillGithub />
          </Button>
        </a>
        <a href="mailto:abhisheksolanki1020@gmail.com">
          <Button
            border="2px solid #f04244"
            color="#ffff"
            bg="#f04244"
            fontSize={["16px", "17px", "25px", "20px"]}
            p={[0, 0, "20px", 0]}
            pt={["none", "none", "25px", "none"]}
            pb={["none", "none", "25px", "none"]}
            borderRadius="50%"
            transition="all .4s ease-in-out"
            _hover={{
              transform: "scale(1.1)",
              bg: "#ffff",
              color: "#f04244",
            }}
          >
            <AiOutlineMail />
          </Button>
        </a>
        <a href="tel:+919758207006">
          <Button
            border="2px solid #4db946"
            borderRadius={"50%"}
            fontSize={["16px", "17px", "20px", "20px"]}
            p={[0, 0, "20px", 0]}
            pt={["none", "none", "25px", "none"]}
            pb={["none", "none", "25px", "none"]}
            color="#ffff"
            bg="#4db946"
            transition="all .4s ease-in-out"
            _hover={{
              transform: "scale(1.1)",
              bg: "#ffff",
              color: "#4db946",
            }}
          >
            <FiPhoneCall />
          </Button>
        </a>
      </Box>

       {/*======================== Up arrow Icon ======================= */}
       <Button
        data-aos="zoom-in"
        onClick={() => window.scrollTo({ top: 0, left: 0, behavior: "smooth" })}
        position={"fixed"}
        bottom="0"
        right="0"
        zIndex={10}
        mr={[4, 4, "30.6px", 4]}
        mb={["80px", "80px", "160px", "80px"]}
        border="2px solid #ff6600"
        color="#ffff"
        bg="#ff6600"
        fontSize={["15px", "18px", "20px", "21px"]}
        p={[0, 0, "20px", 0]}
        pt={["15px", "none", "25px", "none"]}
        pb={["15px", "none", "25px", "none"]}
        borderRadius="50%"
        transition="all .4s ease-in-out"
        _hover={{
          transform: "scale(1.1)",
          bg: "#ffff",
          color: "#ff6600",
        }}
      >
        <FaRegArrowAltCircleUp />
      </Button>

      {/* ================== Plus Button ================== */}
      <Button
        onClick={() => setIcon(!icon)}
        position={"fixed"}
        zIndex={100}
        bottom="0"
        right="0"
        mr={[4, 4, 7, 4]}
        mb={["8", "8", "95px", "8"]}
        border="2px solid #ff6600"
        color="#ffff"
        bg="#ff6600"
        fontSize={["16px", "17px", "20px", "20px"]}
        p={[0, 0, "20px", 0]}
        pt={["none", "none", "25px", "none"]}
        pb={["none", "none", "25px", "none"]}
        borderRadius="50%"
        transition="all .4s ease-in-out"
        _hover={{
          transform: "scale(1.1)",
          bg: "#ffff",
          color: "#ff6600",
        }}
      >
        {icon ? <ImCross /> : <BsPlusLg />}
      </Button>

      <Text pb={10} fontSize={14} w={"90%"} m="auto" textAlign={"center"}>
        Designed and build by Abhishek Pratap Solanki, 2022 All right reserved.
      </Text>
    </div>
  );
};

export default Contact;
