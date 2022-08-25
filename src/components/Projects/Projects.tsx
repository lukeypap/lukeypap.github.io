import { Box, Container, Image, Text } from "@chakra-ui/react";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link as ReactScrollLink } from "react-scroll";
import { projectList } from "../../data/projectInfo";
import ProjectCard from "./ProjectCard";
import projectWaveSvg from "../../resources/cyanWave.svg";
import { useRef } from "react";
import { useInView } from "framer-motion";
import AnimateLetters from "../AnimateLetters/AnimateLetters";

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
            height={"1700px"}
            ref={projectHeaderRef}
            id="projects"
        >
            {projectHeaderIsInView ? (
                <Container maxWidth={"6xl"} position={"absolute"} pl="100px" margin={"0 auto"}>
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
                    {projectList.map((project, id) => (
                        <ProjectCard
                            title={project.name}
                            description={project.description}
                            tech={project.techUsed}
                            projectImage={project.screenshotLocation}
                            demoInfo={project.demo}
                            githubLink={project.githubLink}
                            key={id}
                        />
                    ))}
                </Container>
            ) : (
                ""
            )}

            <Image src={projectWaveSvg} objectFit={"cover"} h="28%" w="100%" />
        </Box>
    );
};

export default Projects;
