import { Box, Container, Heading, HStack, Icon, Text, useColorMode } from "@chakra-ui/react";
import { useInView } from "framer-motion";
import { useRef } from "react";
import singleWaveAbout from "../../resources/singleWaveAbout.svg";
import AnimateLetters from "../AnimateLetters/AnimateLetters";
import {
    SiReact,
    SiNextdotjs,
    SiJava,
    SiTypescript,
    SiPython,
    SiPostgresql,
    SiTailwindcss,
} from "react-icons/si";
import TechIcon from "./TechIcon";

const About = () => {
    const headerArray = ["A", "b", "o", "u", "t"];
    const aboutHeaderRef = useRef(null);
    const aboutHeaderIsInView = useInView(aboutHeaderRef, { once: true, amount: 0.2 });
    const { colorMode, toggleColorMode } = useColorMode();
    const iconArray = [
        SiReact,
        SiNextdotjs,
        SiJava,
        SiTypescript,
        SiPython,
        SiPostgresql,
        SiTailwindcss,
    ];

    return (
        <Box
            bgImage={singleWaveAbout}
            backgroundRepeat={"no-repeat"}
            backgroundSize={"cover"}
            display={"flex"}
            justifyContent={"center"}
            id="about"
            ref={aboutHeaderRef}
            mb={"100px"}
        >
            {aboutHeaderIsInView ? (
                <>
                    <Container maxWidth={"6xl"} margin={"0 auto"} mt={"160px"}>
                        <AnimateLetters wordArray={headerArray} id={1} color="#1A202C" />
                        <Text
                            display="inline-block"
                            fontSize={"7xl"}
                            color={"#1A202C"}
                            pr={"10px"}
                            style={{
                                animation: "fadeIn 2s",
                                opacity: "0",
                                animationFillMode: "forwards",
                                animationDelay: "1s",
                            }}
                        >
                            .
                        </Text>
                        <Container
                            maxWidth={"6xl"}
                            mt={"120px"}
                            fontWeight="bold"
                            color={colorMode === "dark" ? "gray.400" : "gray.600"}
                            style={{
                                animation: "fadeIn 2s",
                                opacity: "0",
                                animationFillMode: "forwards",
                                animationDelay: "1s",
                            }}
                        >
                            <Heading
                                mb={"20px"}
                                borderBottom={"4px"}
                                w={{ base: "100%", md: "50%" }}
                                borderColor={colorMode === "dark" ? "#8a9b37" : "#C7DE50"}
                                lineHeight={"8px"}
                                color={colorMode === "light" ? "" : "gray.100"}
                                size="md"
                            >
                                Hello! I'm Luke and I love building things with code.
                            </Heading>
                            <Text
                                mb={"20px"}
                                _hover={{
                                    transform: "scale(1.01)",
                                    color: `${colorMode === "dark" ? "gray.200" : ""}`,
                                }}
                                style={{ transition: "0.5s" }}
                            >
                                I've always been interested in learning to code and 2 years ago when
                                the pandemic hit the UK I decided to use my time to learn. After a
                                few weeks I managed to create my first app in Java, a simple command
                                line Tic-Tac-Toe game. I continued to learn Java for a few months
                                grasping all the basic concepts and moving onto more advanced
                                topics.
                            </Text>
                            <Text
                                mb={"20px"}
                                _hover={{
                                    transform: "scale(1.01)",
                                    color: `${colorMode === "dark" ? "gray.200" : ""}`,
                                }}
                                style={{ transition: "0.5s" }}
                            >
                                At the same time I was working as an IT tech for a company which
                                required me to do lots of repetitive taks, this led me onto Python.
                                Picking up Python came very quickly as I'd already came to know the
                                basic concepts of coding. I applied this knowledge to create a few
                                scripts which automated my day to day work.
                            </Text>
                            <Text
                                mb={"20px"}
                                _hover={{
                                    transform: "scale(1.01)",
                                    color: `${colorMode === "dark" ? "gray.200" : ""}`,
                                }}
                                style={{ transition: "0.5s" }}
                            >
                                From creating my scripts I learned about API's and the wonderul
                                world of web development! After reading lots of tutorials and
                                documentation I built my first app in Javascript, a Dijkstra
                                visualisation app. I decided to use React for this project because
                                of its component based theme, I had no idea what I got myself
                                into...
                            </Text>
                            <Text
                                mb={"20px"}
                                _hover={{
                                    transform: "scale(1.01)",
                                    color: `${colorMode === "dark" ? "gray.200" : ""}`,
                                }}
                                style={{ transition: "0.5s" }}
                            >
                                After lots of trial and error and thinking, why doesn't state work
                                like it does in Java? Why do I have to useState? It finally clicked,
                                since then on I've been obsessed with React and how it can create
                                such powerful web apps.
                            </Text>
                            <Text
                                mb={"20px"}
                                _hover={{
                                    transform: "scale(1.01)",
                                    color: `${colorMode === "dark" ? "gray.200" : ""}`,
                                }}
                                style={{ transition: "0.5s" }}
                            >
                                This leads us to today where I'm still using React to build
                                interactive web apps. The most recent project I've been working on
                                is a Ticket System, see my projects section for more info! Thank you
                                for stopping by. Don't hesitate to get in contact, you can use my
                                form or click my email at the bottom of this page. Bye!
                            </Text>
                        </Container>
                        <Container textAlign={"center"}>
                            <Heading
                                size="lg"
                                mb={"50px"}
                                mt={"100px"}
                                style={{
                                    animation: "fadeIn 2s",
                                    opacity: "0",
                                    animationFillMode: "forwards",
                                    animationDelay: "1.5s",
                                }}
                            >
                                Technologies I've used
                            </Heading>
                            <HStack justifyContent={"center"} alignItems={"center"} spacing={10}>
                                {iconArray.map((icon, id) => (
                                    <TechIcon
                                        key={id}
                                        icon={icon}
                                        width="60px"
                                        height="60px"
                                        aboutHeaderIsInView={aboutHeaderIsInView}
                                    />
                                ))}
                            </HStack>
                        </Container>
                    </Container>
                </>
            ) : (
                ""
            )}
        </Box>
    );
};

export default About;
