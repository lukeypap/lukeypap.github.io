import { Box, Container, Text } from "@chakra-ui/react";
import React from "react";
import layeredWavesAbout from "../../resources/layered-waves-about.svg";
import singleWaveAbout from "../../resources/singleWaveAbout.svg";

const About = () => {
    return (
        <Box
            h="1000px"
            bgImage={singleWaveAbout}
            backgroundRepeat={"no-repeat"}
            backgroundSize={"cover"}
            display={"flex"}
            justifyContent={"center"}
        >
            <Container maxWidth={"6xl"} position={"absolute"} pl="100px" margin={"0 auto"}>
                <Text fontSize={"5xl"} id="projects" display="inline-block">
                    About
                </Text>
                <Text display="inline-block" fontSize={"7xl"} color={"#C7DE50"} pr={"10px"}>
                    .
                </Text>
            </Container>
        </Box>
    );
};

export default About;
