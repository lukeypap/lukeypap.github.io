import { Box, Container, Image, Text } from "@chakra-ui/react";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link as ReactScrollLink } from "react-scroll";
import { projectList } from "../../data/projectInfo";
import ProjectCard from "./ProjectCard";
import projectWaveSvg from "../../resources/cyanWave.svg";
import ProjectCardNew from "./ProjectCardNew";
import { useRef } from "react";
import { useInView } from "framer-motion";

const Projects = () => {
    return (
        <Box
            mt="80px"
            position={"relative"}
            w={"100%"}
            display={"flex"}
            justifyContent={"center"}
            height={"1600px"}
        >
            <Container maxWidth={"6xl"} position={"absolute"} pl="100px" margin={"0 auto"}>
                <Text fontSize={"5xl"} id="projects" display="inline-block">
                    Projects
                </Text>
                <Text display="inline-block" fontSize={"7xl"} color={"cyan.600"} pr={"10px"}>
                    .
                </Text>
                <ReactScrollLink
                    to="navbar"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    style={{ cursor: "pointer" }}
                >
                    <FontAwesomeIcon fontSize="30px" icon={faArrowUp} beat />
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
            <Image src={projectWaveSvg} objectFit={"cover"} h="28%" w="100%" />
        </Box>
    );
};

export default Projects;
