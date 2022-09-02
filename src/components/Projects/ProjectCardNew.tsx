import { ExternalLinkIcon } from "@chakra-ui/icons";
import {
    Box,
    Center,
    Heading,
    Text,
    Stack,
    useColorModeValue,
    Image,
    Badge,
    Button,
    Link,
} from "@chakra-ui/react";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface props {
    title: string;
    description: string;
    tech: string[];
    projectImage: string[];
    githubLink: string;
    demoInfo: { demoLink: string; demoable: boolean };
    timeScale: number;
}

export default function ProjectCardNew({
    title,
    description,
    tech,
    projectImage,
    githubLink,
    demoInfo,
    timeScale,
}: props) {
    const projectRef = useRef(null);
    const projectIsInView = useInView(projectRef, { once: true });

    return (
        <Center py={6} _hover={{ transform: "scale(1.05,1.05)" }} style={{ transition: "1s" }}>
            <Box
                maxW={"445px"}
                w={"full"}
                bg={useColorModeValue("white", "gray.900")}
                boxShadow={"2xl"}
                rounded={"md"}
                p={6}
                overflow={"hidden"}
                ref={projectRef}
                style={{
                    transform: projectIsInView ? "none" : "translateY(70px)",
                    opacity: projectIsInView ? 1 : 0,
                    transition: `all 1s cubic-bezier(0.17, 0.55, 0.55, 1) ${timeScale / 10 + 0.2}s`,
                }}
            >
                <Box bg={"gray.100"} mt={-6} mx={-6} mb={6} position={"relative"}>
                    <Image src={projectImage[0]} objectFit={"cover"} zIndex={"-1"} />
                </Box>
                <Stack>
                    <Text
                        color={"#0c7d99"}
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
                        {title}
                    </Heading>
                    <Text color={"gray.500"}>{description}</Text>
                </Stack>
                <Stack
                    align={"center"}
                    justify={"center"}
                    direction={"row"}
                    mt={6}
                    flexWrap={"wrap"}
                >
                    {tech.map((item, id) => (
                        <Badge
                            px={2}
                            py={1}
                            fontWeight={"400"}
                            key={id}
                            my={2}
                            colorScheme={"messenger"}
                        >
                            {item}
                        </Badge>
                    ))}
                </Stack>
                <Stack direction={"row"} justifyContent={"center"} mt="5">
                    <Link href={githubLink} style={{ textDecoration: "none" }}>
                        <Button colorScheme={"messenger"} mr="2" variant={"outline"}>
                            Github
                        </Button>
                    </Link>
                    <Link href={demoInfo.demoLink} style={{ textDecoration: "none" }}>
                        <Button colorScheme={"messenger"}>Demo</Button>
                    </Link>
                </Stack>
            </Box>
        </Center>
    );
}
