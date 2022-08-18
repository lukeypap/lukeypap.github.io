import { Text, Box, Container, Image, Button } from "@chakra-ui/react";
import headerSVG from "./resources/triangleAsymmetricalNegative.svg";
import { Link as ReactScrollLink, animateScroll as scroll } from "react-scroll";
import { randomColor } from "@chakra-ui/theme-tools";
import "./components/header.css";

const Header = () => {
    return (
        <>
            <Box pt="100px" height="72vh">
                <Container pt={5} maxWidth={"6xl"}>
                    <Text fontSize="6xl" style={{ display: "inline-block" }}>
                        Hello
                    </Text>
                    <Text fontSize="6xl" className="rainbow" style={{ display: "inline-block" }}>
                        !
                    </Text>
                    <Text />
                    <Text fontSize="4xl" style={{ display: "inline-block" }} fontWeight="light">
                        My name is,
                    </Text>
                    <Text
                        pl={2}
                        fontSize="5xl"
                        color={"red.600"}
                        style={{ display: "inline-block" }}
                    >
                        Luke
                    </Text>
                    <Text pt={1} pb={3} fontSize="m" fontWeight="light">
                        I build things for the web.
                    </Text>
                    <Button mt={4} variant="outline" color="red.600" borderColor="red.600">
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
