import {
    Box,
    Center,
    Heading,
    Text,
    Stack,
    Avatar,
    useColorModeValue,
    Image,
    useColorMode,
} from "@chakra-ui/react";
import ticketSystemScreenshot from "../../resources/ticket-systemss.png";

export default function ProjectCardNew() {
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <Center py={6}>
            <Box
                maxW={"445px"}
                w={"full"}
                bg={useColorModeValue("white", "gray.900")}
                boxShadow={"2xl"}
                rounded={"md"}
                p={6}
                overflow={"hidden"}
            >
                <Box bg={"gray.100"} mt={-6} mx={-6} mb={6} position={"relative"}>
                    <Image src={ticketSystemScreenshot} objectFit={"cover"} zIndex={"-1"} />
                </Box>
                <Stack>
                    <Text
                        color={"green.500"}
                        textTransform={"uppercase"}
                        fontWeight={800}
                        fontSize={"sm"}
                        letterSpacing={1.1}
                    >
                        Project
                    </Text>
                    <Heading
                        color={useColorModeValue("gray.700", "white")}
                        fontSize={"2xl"}
                        fontFamily={"body"}
                    >
                        Ticket System
                    </Heading>
                    <Text color={"gray.500"}>
                        A simple ticket system that is used to track bugs and issues. Has a user
                        management system with authentication.
                    </Text>
                </Stack>
                <Stack mt={6} direction={"row"} spacing={4} align={"center"}>
                    <Avatar />
                    <Stack direction={"column"} spacing={0} fontSize={"sm"}>
                        <Text fontWeight={600}>First Name</Text>
                        <Text color={"gray.500"}>Feb 08, 2021 · 6min read</Text>
                    </Stack>
                </Stack>
            </Box>
        </Center>
    );
}
