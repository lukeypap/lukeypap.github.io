import { Text, Box, Container } from "@chakra-ui/react";

const Header = () => {
    return (
        <Box mt="100px" pl={10} height="100vh">
            <Container pt={5} maxWidth={"6xl"}>
                <Text fontSize="6xl">Hello!</Text>
                <Text fontSize="4xl" style={{ display: "inline-block" }} fontWeight="light">
                    My name is,
                </Text>
                <Text pl={2} fontSize="5xl" color={"red.600"} style={{ display: "inline-block" }}>
                    Luke
                </Text>
                <Text pt={1} pb={3} fontSize="m" fontWeight="light">
                    I build things for the web.
                </Text>
            </Container>
        </Box>
    );
};

export default Header;
