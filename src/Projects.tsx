import { Box, Text, Container, Image } from "@chakra-ui/react";
import ProjectCard from "./components/ProjectCard";
import { projectList } from "./projectInfo";
import projectWaveSvg from "./resources/cyanWave.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { Link as ReactScrollLink, animateScroll as scroll } from "react-scroll";

const Projects = () => {
    return (
        <Box mt="80px" position={"relative"}>
            <Container maxWidth={"6xl"} position={"absolute"} left="20%">
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
                        key={id}
                    />
                ))}
            </Container>
            <Image src={projectWaveSvg} />
        </Box>
    );
};

export default Projects;
