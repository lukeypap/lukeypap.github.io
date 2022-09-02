import { Box, Container, Flex, Image, SimpleGrid, Text } from "@chakra-ui/react";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link as ReactScrollLink } from "react-scroll";
import { projectList } from "../../data/projectInfo";
import projectWaveSvg from "../../resources/cyanWave.svg";
import { useRef } from "react";
import { useInView } from "framer-motion";
import AnimateLetters from "../AnimateLetters/AnimateLetters";
import ProjectCardNew from "./ProjectCardNew";

const Projects = () => {
    const headerArray = ["P", "r", "o", "j", "e", "c", "t", "s"];
    const projectHeaderRef = useRef(null);
    const projectHeaderIsInView = useInView(projectHeaderRef, { once: true, amount: 0.2 });

    return (
        <Box
            mt="80px"
            position={"relative"}
            w={"100%"}
            display={"flex"}
            justifyContent={"center"}
            height={{ base: "1800px", md: "800px" }}
            ref={projectHeaderRef}
            id="projects"
        >
            {projectHeaderIsInView ? (
                <Container maxWidth={"6xl"} position={"absolute"}>
                    <AnimateLetters wordArray={headerArray} color="" id={1} />
                    <Text
                        display="inline-block"
                        fontSize={"7xl"}
                        color={"cyan.600"}
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
                    <ReactScrollLink
                        to="navbar"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        style={{
                            animation: "fadeIn 2s",
                            opacity: "0",
                            animationFillMode: "forwards",
                            animationDelay: "1s",
                            cursor: "pointer",
                        }}
                    >
                        <FontAwesomeIcon
                            fontSize="30px"
                            icon={faArrowUp}
                            beat
                            style={{ marginBottom: "2px" }}
                        />
                    </ReactScrollLink>
                    <Flex justifyContent={"flex-start"}>
                        <SimpleGrid
                            columns={{ sm: 1, md: 3 }}
                            gap={4}
                            mt={6}
                            alignItems={"flex-start"}
                        >
                            {projectList.map((project, id) => (
                                <ProjectCardNew
                                    title={project.name}
                                    description={project.description}
                                    tech={project.techUsed}
                                    projectImage={project.screenshotLocation}
                                    demoInfo={project.demo}
                                    githubLink={project.githubLink}
                                    key={id}
                                    timeScale={id}
                                />
                            ))}
                        </SimpleGrid>
                    </Flex>
                    {/* {projectList.map((project, id) => (
                        <ProjectCardNew
                            title={project.name}
                            description={project.description}
                            tech={project.techUsed}
                            projectImage={project.screenshotLocation}
                            demoInfo={project.demo}
                            githubLink={project.githubLink}
                            key={id}
                        />
                    ))} */}
                </Container>
            ) : (
                ""
            )}

            <Image src={projectWaveSvg} objectFit={"cover"} h="50%" w="100%" />
        </Box>
    );
};

export default Projects;
