import { Text, Box, Container, Image, Button } from "@chakra-ui/react";
import headerSVG from "./resources/triangleAsymmetricalNegative.svg";
import { Link as ReactScrollLink, animateScroll as scroll } from "react-scroll";
import { randomColor } from "@chakra-ui/theme-tools";
import "./components/header.scss";
import { Fade, ScaleFade, Slide, SlideFade, useColorMode } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import AnimateLetters from "./components/AnimateLetters/AnimateLetters";
import "./components/AnimateLetters/textAnimation.scss";
import "./styles/headerStyles.scss";

const Header = () => {
    const [letterClass, setLetterClass] = useState("text-animate");
    const nameArray = ["L", "u", "k", "e"];
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <>
            <Box pt="100px" height="72vh">
                <Container pt={5} maxWidth={"6xl"}>
                    <Text
                        fontSize="6xl"
                        style={{
                            display: "inline-block",
                            animation: "fadeIn 2s",
                            opacity: "0",
                            animationFillMode: "forwards",
                            animationDelay: "0.5s",
                        }}
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
                    <AnimateLetters letterClass={letterClass} wordArray={nameArray} id={20} />
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
                        <ReactScrollLink
                            to="projects"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >
                            View my Projects
                        </ReactScrollLink>
                    </Button>
                </Container>
            </Box>
            <Image src={headerSVG} />
        </>
    );
};

export default Header;
