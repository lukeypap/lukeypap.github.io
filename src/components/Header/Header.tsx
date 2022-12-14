import { Box, Button, HStack, Text } from "@chakra-ui/react";
import { Link, scroller } from "react-scroll";
import AnimateLetters from "../AnimateLetters/AnimateLetters";
import "../AnimateLetters/textAnimation.scss";
import "../Header/header.scss";
import headerSVG from "../../resources/triangleAsymmetricalNegative.svg";
import { ReactTerminal } from "react-terminal";

const Header = () => {
    const nameArray = ["L", "u", "k", "e"];

    const commands = {
        whoami: "lukepapaoikonomou",
        commands: `whoami, about, projects, contact`,
        about: () =>
            scroller.scrollTo("about", {
                smooth: true,
                offset: 50,
            }),
        projects: () =>
            scroller.scrollTo("projects", {
                smooth: true,
            }),
        contact: () =>
            scroller.scrollTo("contact", {
                smooth: true,
            }),
        cd: (directory: any) => `changed path to ${directory}`,
    };
    const welcomeMessage = "Type commands to view a list of commands.\n";

    return (
        <>
            <Box
                pt="100px"
                height="90vh"
                backgroundImage={headerSVG}
                style={{ backgroundSize: "1920px 300px" }}
                backgroundPosition={"bottom"}
                backgroundRepeat={"no-repeat"}
            >
                <HStack justifyContent={"center"} h="80%">
                    <Box pt={5} w="40%">
                        <Text
                            fontSize="6xl"
                            style={{
                                display: "inline-block",
                                animation: "fadeIn 2s",
                                opacity: "0",
                                animationFillMode: "forwards",
                                animationDelay: "0.5s",
                            }}
                            borderBottom={"8px"}
                            lineHeight="30px"
                            borderColor={"#C53030"}
                        >
                            Hello
                        </Text>
                        <Text
                            fontSize="6xl"
                            className="rainbow"
                            style={{
                                display: "inline-block",
                                animation: "fadeIn 2s",
                                opacity: "0",
                                animationFillMode: "forwards",
                                animationDelay: "1s",
                            }}
                        >
                            !
                        </Text>
                        <Text />
                        <Text
                            fontSize="4xl"
                            style={{
                                display: "inline-block",
                                animation: "fadeIn 2s",
                                opacity: "0",
                                animationFillMode: "forwards",
                                animationDelay: "1.5s",
                            }}
                            fontWeight="light"
                            pr={2}
                        >
                            My name is,
                        </Text>
                        <AnimateLetters wordArray={nameArray} id={20} color="red.600" />
                        <Text
                            pt={1}
                            pb={3}
                            fontSize="m"
                            fontWeight="light"
                            style={{
                                animation: "fadeIn 2s",
                                opacity: "0",
                                animationFillMode: "forwards",
                                animationDelay: "2s",
                            }}
                        >
                            I build things for the web.
                        </Text>
                        <Button
                            mt={4}
                            variant="outline"
                            color="red.600"
                            borderColor="red.600"
                            style={{
                                animation: "fadeIn 2s",
                                opacity: "0",
                                animationFillMode: "forwards",
                                animationDelay: "3s",
                            }}
                        >
                            <Link
                                to="projects"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                View my Projects
                            </Link>
                        </Button>
                    </Box>
                    <Box
                        h="500px"
                        pr="100px"
                        w="50%"
                        maxW="900px"
                        pt="20px"
                        style={{
                            animation: "fadeIn 1s",
                            opacity: "0",
                            animationFillMode: "forwards",
                            animationDelay: "4s",
                        }}
                    >
                        <ReactTerminal
                            commands={commands}
                            themes={{
                                "my-custom-theme": {
                                    themeBGColor: "#11141a7a",
                                    themeToolbarColor: "#11141a7a",
                                    themeColor: "#ffffff",
                                    themePromptColor: "#a91723",
                                },
                            }}
                            theme="my-custom-theme"
                            showControlButtons={false}
                            showControlBar={false}
                            welcomeMessage={welcomeMessage}
                        />
                    </Box>
                </HStack>
            </Box>
            {/* <Image src={headerSVG} /> */}
        </>
    );
};

export default Header;
