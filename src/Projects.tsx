import { Box, Text, Container } from "@chakra-ui/react";
import ProjectCard from "./components/ProjectCard";
import { projectList } from "./projectInfo";

const Projects = () => {
    return (
        <Box mt="100px">
            <Container pt={5} maxWidth={"6xl"}>
                <Text fontSize={"4xl"} id="about">
                    Projects.
                </Text>
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
        </Box>
    );
};

export default Projects;
