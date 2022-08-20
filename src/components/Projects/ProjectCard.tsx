import {
    Badge,
    Button,
    Box,
    Flex,
    Heading,
    Image,
    Link,
    Stack,
    Text,
    useColorModeValue,
} from "@chakra-ui/react";
import { useState } from "react";

const ProjectCard = ({
    title,
    description,
    tech,
    projectImage,
    projectDemoLink,
}: {
    title: string;
    description: string;
    tech: string[];
    projectImage: string;
    projectDemoLink: string;
}) => {
    const [hover, setHover] = useState(false);

    const onMouseEnter = (e: any) => {
        setHover(true);
    };

    const onMouseLeave = (e: any) => {
        setHover(false);
    };

    return (
        <Box py={6} mt={5}>
            <Stack direction={{ base: "column", md: "row" }} position={"relative"} w={"95%"}>
                <Flex flex={1}>
                    <Image
                        objectFit="cover"
                        boxSize="100%"
                        w={{ sm: "100%", md: "440px", xl: "800px" }}
                        src={projectImage}
                        boxShadow={"2xl"}
                        border="1px"
                        borderColor="gray.900"
                        onMouseEnter={onMouseEnter}
                        onMouseLeave={onMouseLeave}
                        style={{
                            transform: `${hover ? "scale(1.05,1.05)" : "scale(1)"}`,
                            transition: "1s",
                        }}
                    />
                </Flex>
                <Stack
                    w={{ sm: "100%", md: "440px" }}
                    height={{ sm: "476px", md: "15rem" }}
                    direction={{ base: "column", md: "row" }}
                    bg={useColorModeValue("white", "gray.900")}
                    boxShadow={"2xl"}
                    padding={4}
                    position={"absolute"}
                    right="0px"
                    top="20%"
                    style={{ opacity: hover ? "0.20" : "1", transition: "opacity 1s" }}
                >
                    <Stack
                        flex={1}
                        flexDirection="column"
                        justifyContent="center"
                        alignItems="center"
                        p={1}
                        pt={2}
                    >
                        <Heading fontSize={"2xl"} fontFamily={"body"}>
                            {title}
                        </Heading>
                        <Text
                            textAlign={"center"}
                            color={useColorModeValue("gray.700", "gray.400")}
                            px={3}
                        >
                            {description}
                        </Text>
                        <Stack align={"center"} justify={"center"} direction={"row"} mt={6}>
                            {tech.map((item, id) => (
                                <Badge px={2} py={1} fontWeight={"400"} key={id}>
                                    {item}
                                </Badge>
                            ))}
                        </Stack>

                        <Stack
                            width={"100%"}
                            mt={"2rem"}
                            direction={"row"}
                            padding={2}
                            justifyContent={"space-between"}
                            alignItems={"center"}
                        >
                            <Button
                                flex={1}
                                fontSize={"sm"}
                                rounded={"full"}
                                _focus={{
                                    bg: "gray.200",
                                }}
                            >
                                Github
                            </Button>
                            <Button
                                flex={1}
                                fontSize={"sm"}
                                rounded={"full"}
                                bg={"blue.400"}
                                color={"white"}
                                boxShadow={
                                    "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
                                }
                                _hover={{
                                    bg: "blue.500",
                                }}
                                _focus={{
                                    bg: "blue.500",
                                }}
                            >
                                <Link href={projectDemoLink}>Demo</Link>
                            </Button>
                        </Stack>
                    </Stack>
                </Stack>
            </Stack>
        </Box>
    );
};

export default ProjectCard;
