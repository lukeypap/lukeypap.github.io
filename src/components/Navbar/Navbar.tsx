import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
    Box,
    Button,
    Flex,
    HStack,
    Link,
    Stack,
    Text,
    useColorMode,
    useColorModeValue,
} from "@chakra-ui/react";
import { Link as ReactScrollLink } from "react-scroll";
import "../AnimateLetters/textAnimation.scss";

export default function NavBar() {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <>
            <Box bg={useColorModeValue("white", "gray.800")} px={10} pt={10}>
                <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
                    <HStack spacing={8} pl={8} maxW="50vw">
                        <Link _hover={{ textDecor: "none" }} className={`text-animate _${1}`}>
                            About
                        </Link>
                        <ReactScrollLink
                            id="navbar"
                            to="projects"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            className={`text-animate _${2}`}
                        >
                            Projects
                        </ReactScrollLink>
                        <Link _hover={{ textDecor: "none" }} className={`text-animate _${3}`}>
                            Contact
                        </Link>
                    </HStack>
                    <Flex alignItems={"center"} maxW="50vw">
                        <Stack direction={"row"} spacing={7}>
                            <Button
                                onClick={toggleColorMode}
                                variant="outline"
                                className={`text-animate _${4}`}
                            >
                                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
                            </Button>
                            <Button variant="outline" className={`text-animate _${5}`}>
                                <Text>CV</Text>
                            </Button>
                        </Stack>
                    </Flex>
                </Flex>
            </Box>
        </>
    );
}