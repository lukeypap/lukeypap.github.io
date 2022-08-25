import { Box, Container, Text } from "@chakra-ui/react";
import { useInView } from "framer-motion";
import { useRef } from "react";
import singleWaveAbout from "../../resources/singleWaveAbout.svg";
import AnimateLetters from "../AnimateLetters/AnimateLetters";

const About = () => {
    const headerArray = ["A", "b", "o", "u", "t"];
    const aboutHeaderRef = useRef(null);
    const aboutHeaderIsInView = useInView(aboutHeaderRef, { once: true, amount: 0.2 });
    return (
        <Box
            h="1000px"
            bgImage={singleWaveAbout}
            backgroundRepeat={"no-repeat"}
            backgroundSize={"cover"}
            display={"flex"}
            justifyContent={"center"}
            id="about"
            ref={aboutHeaderRef}
        >
            {aboutHeaderIsInView ? (
                <Container maxWidth={"6xl"} position={"absolute"} pl="100px" margin={"0 auto"}>
                    <AnimateLetters wordArray={headerArray} id={1} color="" />
                    <Text
                        display="inline-block"
                        fontSize={"7xl"}
                        color={"#C7DE50"}
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
                </Container>
            ) : (
                ""
            )}
        </Box>
    );
};

export default About;
