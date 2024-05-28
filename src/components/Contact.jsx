import {
  SimpleGrid,
  Heading,
  Image,
  Box,
  Button,
  Input,
  Text,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { AiFillLinkedin, AiFillGithub, AiOutlineMail } from "react-icons/ai";
import { FiPhoneCall } from "react-icons/fi";
import { BsGithub, BsPlusLg } from "react-icons/bs";
import { ImCross } from "react-icons/im";
import { FaRegArrowAltCircleUp } from "react-icons/fa";
import { useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import emailjs from "emailjs-com";
import { data } from "../data/data";
import { MdEmail } from "react-icons/md";
import { BiPhoneCall } from "react-icons/bi";

const Contact = (props) => {
  const { checkTheme, contactScroll } = props;
  const [theme, setTheme] = useState({});
  const [theme1, setTheme1] = useState({});
  const [icon, setIcon] = useState(false);
  const toast = useToast();

  //-------- Email Send --------------
  const sendEmail = (e) => {
    e.preventDefault();
    if (data.profile.stop_form) {
      toast({
        title: "This service has been stop from backend!",
        description:
          "Because of some students spam, It will be started soon. Till then we can connect on call.🙂",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    } else {
      emailjs
        .sendForm(
          "service_ml5brp5",
          "template_xe5tl5l",
          e.target,
          "_-SYa4AW4mbtbVQiF"
        )
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
      toast({
        title: "Thanks for contacting me.🙂",
        description: "I will reply you soon.",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
    }
    e.target.reset();
  };

  // =========== Animation =============>

  useEffect(() => {
    AOS.init({ offset: 300, duration: 1000 });
  }, []);

  // =========== Theme 1 =============>

  useEffect(() => {
    if (checkTheme) {
      setTheme1({
        color: "white",
        backgroundColor: "#0f1624",
      });
    } else {
      setTheme1({
        color: "black",
        backgroundColor: "#edf2f8",
      });
    }
  }, [checkTheme]);

  // =========== Theme 2 =============>

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
    <div ref={contactScroll} className="mainDiv" style={theme}>
      <Heading fontSize={40} color={data.universal.color}>
        Contact <span style={theme}>Me</span>
      </Heading>
      <SimpleGrid columns={[1, 1, 1, 2]} pb="70px">
        {/* ========== Email and boy image ========== */}

        <Image
          mr={["auto", "auto", "auto", "-100px"]}
          data-aos="zoom-in"
          mt={30}
          m="auto"
          h={["300px", "300px", "420px", "450px"]}
          src={data.profile.email_img}
          alt="emailimg"
        />

        <SimpleGrid data-aos="zoom-in">
          {/* ========== Social midea Buttons ========== */}

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
                data-aos="fade-up"
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
                title="Abhishek07788"
                transition="all .4s ease-in-out"
                _hover={{
                  transform: "scale(1.1)",
                  bg: "#ffff",
                  color: "#3f3d55",
                }}
                data-aos="fade-up"
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
                title="abhisheksolanki1020@gmail.com"
                transition="all .4s ease-in-out"
                _hover={{
                  transform: "scale(1.1)",
                  bg: "#ffff",
                  color: "#f04244",
                }}
                data-aos="fade-up"
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
                title="Call & WhatsApp: 9758207006"
                transition="all .4s ease-in-out"
                _hover={{
                  transform: "scale(1.1)",
                  bg: "#ffff",
                  color: "#4db946",
                }}
                data-aos="fade-up"
              >
                <FiPhoneCall style={{ marginRight: "4", fontSize: "20px" }} />
              </Button>
            </a>
          </Box>

          {/* ========== Email Form ========== */}

          <Box m={"auto"} mt="15px" width="65%">
            <Heading
              data-aos="fade-up"
              fontSize={22}
              style={theme}
              textAlign="left"
            >
              Get In <span style={{ color: data.universal.color }}>Touch.</span>
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
                maxLength="100"
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
                minLength="10"
                maxLength="10"
                // data-aos="fade-down"
              />
              <textarea
                style={theme1}
                id="Message"
                placeholder="Your Message"
                name="message"
                rows="5"
                required
              />

              {/* ============= Reset button============ */}
              <Box display={"flex"} gap="3">
                <Input
                  type={"submit"}
                  border={`2px solid ${data.universal.color}`}
                  fontSize={18}
                  mt={1}
                  color="black"
                  bg={data.universal.color}
                  w="100%"
                  transition="all .4s ease-in-out"
                  _hover={{
                    bg: "#f04244",
                    color: "#ffff",
                    w: "95%",
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
                    w: "33%",
                    color: "red",
                  }}
                  type="reset"
                  onClick={() =>
                    toast({
                      title: "Form has been Cleared !",
                      status: "success",
                      duration: 1000,
                      isClosable: true,
                    })
                  }
                >
                  Clear
                </Button>
              </Box>
            </form>
          </Box>
        </SimpleGrid>
      </SimpleGrid>

      {/* ========== Right side Icons ========== */}

      <Box
        position={"fixed"}
        zIndex={50}
        bottom="0"
        right="0"
        mr={[4, 4, 7, 4]}
        gap={3}
        pb={["80px", "80px", "160px", "80px"]}
        display={icon ? "grid" : "none"}
      >
        {data.profile.social_icons.map((icon, index) => (
          <a href={icon.link} key={index} title={icon.name} target="_blank">
            <Button
              border={`2px solid ${icon.color}`}
              color="#ffff"
              bg={icon.color}
              fontSize={["16px", "17px", "25px", "20px"]}
              p={[0, 0, "20px", 0]}
              pt={["none", "none", "25px", "none"]}
              pb={["none", "none", "25px", "none"]}
              borderRadius="50%"
              transition="all .4s ease-in-out"
              _hover={{
                transform: "scale(1.1)",
                bg: "#ffff",
                color: icon.color,
              }}
            >
              {icon.type === "linkedin" && <AiFillLinkedin />}
              {icon.type === "github" && <BsGithub />}
              {icon.type === "email" && <MdEmail />}
              {icon.type === "phone" && <BiPhoneCall />}
            </Button>
          </a>
        ))}
      </Box>

      {/*======================== Up arrow Icon =============== */}
      <Button
        data-aos="zoom-in"
        onClick={() => window.scrollTo({ top: 0, left: 0, behavior: "smooth" })}
        position={"fixed"}
        bottom="0"
        right="0"
        zIndex={10}
        mr={[4, 4, "30.6px", 4]}
        mb={["80px", "80px", "160px", "80px"]}
        border={`2px solid ${data.universal.color}`}
        color="#ffff"
        bg={data.universal.color}
        fontSize={["15px", "18px", "20px", "21px"]}
        p={[0, 0, "20px", 0]}
        pt={["15px", "none", "25px", "none"]}
        pb={["15px", "none", "25px", "none"]}
        borderRadius="50%"
        transition="all .4s ease-in-out"
        _hover={{
          transform: "scale(1.1)",
          bg: "#ffff",
          color: data.universal.color,
        }}
      >
        <FaRegArrowAltCircleUp title="Go to Top" />
      </Button>

      {/* ========== Plus Button ========== */}
      <Button
        onClick={() => setIcon(!icon)}
        position={"fixed"}
        zIndex={100}
        bottom="0"
        right="0"
        mr={[4, 4, 7, 4]}
        mb={["8", "8", "95px", "8"]}
        border={`2px solid ${data.universal.color}`}
        color="#ffff"
        bg={data.universal.color}
        fontSize={["16px", "17px", "20px", "20px"]}
        p={[0, 0, "20px", 0]}
        pt={["none", "none", "25px", "none"]}
        pb={["none", "none", "25px", "none"]}
        borderRadius="50%"
        transition="all .4s ease-in-out"
        _hover={{
          transform: "scale(1.1)",
          bg: "#ffff",
          color: data.universal.color,
        }}
      >
        {icon ? <ImCross /> : <BsPlusLg title="Social media" />}
      </Button>

      <Text pb={10} fontSize={14} w={"90%"} m="auto" textAlign={"center"}>
        Designed and build by ❤️{data.profile.full_name}, 2022 All right
        reserved.
      </Text>
    </div>
  );
};

export default Contact;
