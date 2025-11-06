import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Box,
  Text,
} from "@chakra-ui/react";
import { AiOutlineMenu } from "react-icons/ai";
import { useRef } from "react";
import { data } from "../data/data";
const Slide = (props) => {
  const {
    executeExperience,
    executeAbout,
    executeContact,
    executeProject,
    executeSkill,
    executeGithub,
    theme,
  } = props;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  // ------------------ Click to Hide Slide ------------------
  const homefunc = () => {
    onClose();
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const experiencefunc = () => {
    onClose();
    executeExperience();
  };

  const aboutfunc = () => {
    onClose();
    executeAbout();
  };
  const projectfunc = () => {
    onClose();
    executeProject();
  };

  const githubfunc = () => {
    onClose();
    executeGithub();
  };

  const skillfunc = () => {
    onClose();
    executeSkill();
  };

  const contactfunc = () => {
    onClose();
    executeContact();
  };

  function downloadResume(event) {
    event.preventDefault(); // Prevents default behavior (following the link)
    const link = data.profile.resume; // Get the link from the clicked element
    window.open(link, "_blank"); // Open the link in a new tab
    setTimeout(() => {
      // Wait for a moment before initiating download
      const a = document.createElement("a");
      a.href = link;
      a.download = `${data.profile.resume_name}.pdf`; // If you want to specify a filename, replace '' with the desired filename
      a.click(); // Programmatically trigger the download
    }, 100);
  }

  return (
    <>
      <Box bg={"transparent"} fontSize="25" ref={btnRef} onClick={onOpen}>
        <AiOutlineMenu />
      </Box>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent style={theme}>
          <DrawerCloseButton />
          {/* <DrawerHeader>NavBar</DrawerHeader> */}

          <DrawerBody>
            <Box w="35%" m="auto" mt={30} fontWeight="bold">
              <Box display={"grid"} gap="10px" textAlign={"center"}>
                <Text
                  p="1"
                  fontSize={15}
                  borderRadius={5}
                  _hover={{ bg: data.universal.color, color: "#ffff" }}
                  onClick={homefunc}
                >
                  HOME
                </Text>
                <Text
                  p="1"
                  fontSize={15}
                  borderRadius={5}
                  _hover={{ bg: data.universal.color, color: "#ffff" }}
                  onClick={experiencefunc}
                >
                  EXPERIENCE
                </Text>
                <Text
                  p="1"
                  fontSize={15}
                  borderRadius={5}
                  _hover={{ bg: data.universal.color, color: "#ffff" }}
                  onClick={aboutfunc}
                >
                  ABOUT
                </Text>
                <Text
                  p="1"
                  fontSize={15}
                  borderRadius={5}
                  _hover={{ bg: data.universal.color, color: "#ffff" }}
                  onClick={projectfunc}
                >
                  PROJECTS
                </Text>
                <Text
                  p="1"
                  fontSize={15}
                  borderRadius={5}
                  _hover={{ bg: data.universal.color, color: "#ffff" }}
                  onClick={githubfunc}
                >
                  GITHUB
                </Text>
                <Text
                  p="1"
                  fontSize={15}
                  borderRadius={5}
                  _hover={{ bg: data.universal.color, color: "#ffff" }}
                  onClick={skillfunc}
                >
                  SKILLS
                </Text>
                <Text
                  p="1"
                  fontSize={15}
                  borderRadius={5}
                  _hover={{ bg: data.universal.color, color: "#ffff" }}
                  onClick={contactfunc}
                >
                  CONTACT
                </Text>
                <a
                  onClick={downloadResume}
                >
                  <Text
                    p="1"
                    color={"#ffff"}
                    bg={"#565e59"}
                    fontSize={15}
                    borderRadius={5}
                    _hover={{ bg: data.universal.color, color: "#ffff" }}
                  >
                    RESUME
                  </Text>
                </a>
              </Box>
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Slide;
