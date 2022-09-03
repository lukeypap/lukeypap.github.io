import {
    Box,
    chakra,
    Container,
    IconButton,
    Link,
    Stack,
    Text,
    useColorModeValue,
    VisuallyHidden,
} from "@chakra-ui/react";
import { ReactNode } from "react";
import { BsGithub } from "react-icons/bs";
import { Link as ReactScrollLink } from "react-scroll";

const SocialButton = ({
    children,
    label,
    href,
}: {
    children: ReactNode;
    label: string;
    href: string;
}) => {
    return (
        <chakra.button
            bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
            rounded={"full"}
            w={8}
            h={8}
            cursor={"pointer"}
            as={"a"}
            href={href}
            display={"inline-flex"}
            alignItems={"center"}
            justifyContent={"center"}
            transition={"background 0.3s ease"}
            _hover={{
                bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
            }}
        >
            <VisuallyHidden>{label}</VisuallyHidden>
            {children}
        </chakra.button>
    );
};

export default function Footer() {
    return (
        <Box
            bg={useColorModeValue("gray.50", "gray.900")}
            color={useColorModeValue("gray.700", "gray.200")}
        >
            <Container
                as={Stack}
                maxW={"6xl"}
                py={4}
                spacing={4}
                justify={"center"}
                align={"center"}
            >
                <Stack direction={"row"} spacing={6}>
                    <ReactScrollLink
                        to="navbar"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        style={{ cursor: "pointer" }}
                    >
                        Home
                    </ReactScrollLink>
                    <ReactScrollLink
                        to="about"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        style={{ cursor: "pointer" }}
                    >
                        About
                    </ReactScrollLink>
                    <ReactScrollLink
                        to="projects"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        style={{ cursor: "pointer" }}
                    >
                        Projects
                    </ReactScrollLink>
                    <ReactScrollLink
                        to="contact"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        style={{ cursor: "pointer" }}
                    >
                        Contact
                    </ReactScrollLink>
                </Stack>
            </Container>

            <Box
                borderTopWidth={1}
                borderStyle={"solid"}
                borderColor={useColorModeValue("gray.200", "gray.700")}
            >
                <Container
                    as={Stack}
                    maxW={"6xl"}
                    py={4}
                    direction={{ base: "column", md: "row" }}
                    spacing={4}
                    justify={{ base: "center", md: "space-between" }}
                    align={{ base: "center", md: "center" }}
                >
                    <Text size={"10px"}>© 2022 Luke Papaoikonomou.</Text>
                    <Stack direction={"row"} spacing={6}>
                        <SocialButton label={"Github"} href={"https://github.com/lukeypap"}>
                            <IconButton
                                aria-label="github"
                                variant="ghost"
                                size="lg"
                                isRound={true}
                                _hover={{ bg: "#8200D9" }}
                                icon={<BsGithub size="28px" />}
                            />
                        </SocialButton>
                    </Stack>
                </Container>
            </Box>
        </Box>
    );
}
