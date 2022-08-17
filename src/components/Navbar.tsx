import { ReactNode } from "react";
import {
    Box,
    Flex,
    Link,
    Button,
    useColorModeValue,
    Stack,
    useColorMode,
    HStack,
    Text,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Link as ReactScrollLink, animateScroll as scroll } from "react-scroll";

const NavLink = ({ children }: { children: ReactNode }) => (
    <Link
        px={2}
        py={1}
        rounded={"md"}
        _hover={{
            textDecoration: "none",
            bg: useColorModeValue("gray.200", "gray.700"),
        }}
        href={"#"}
    >
        {children}
    </Link>
);

export default function NavBar() {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <>
            <Box bg={useColorModeValue("gray.50", "gray.800")} px={10} pt={10}>
                <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
                    <HStack spacing={8} pl={8} maxW="50vw">
                        <Link _hover={{ textDecor: "none" }}>About</Link>
                        <ReactScrollLink
                            id="navbar"
                            to="projects"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >
                            Projects
                        </ReactScrollLink>
                        <Link _hover={{ textDecor: "none" }}>Contact</Link>
                    </HStack>
                    <Flex alignItems={"center"} maxW="50vw">
                        <Stack direction={"row"} spacing={7}>
                            <Button onClick={toggleColorMode} variant="outline">
                                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
                            </Button>
                            <Button variant="outline">
                                <Text>CV</Text>
                            </Button>
                        </Stack>
                    </Flex>
                </Flex>
            </Box>
        </>
    );
}
