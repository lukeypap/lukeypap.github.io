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
import { useRef, useState } from "react";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useInView } from "framer-motion";

interface props {
    title: string;
    description: string;
    tech: string[];
    projectImage: string[];
    githubLink: string;
    demoInfo: { demoLink: string; demoable: boolean };
}

const ProjectCard = ({ title, description, tech, projectImage, githubLink, demoInfo }: props) => {
    const [hover, setHover] = useState(false);
    const [currentImage, setCurrentImage] = useState(projectImage[0]);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const projectRef = useRef(null);
    const projectIsInView = useInView(projectRef, { once: true });

    const onMouseEnter = (e: any) => {
        setHover(true);
    };

    const onMouseLeave = (e: any) => {
        setHover(false);
    };

    const handlePictureChange = (direction: string) => {
        if (direction === "forward" && currentImageIndex === projectImage.length - 1) {
            setCurrentImage(projectImage[0]);
            setCurrentImageIndex(0);
        } else if (direction === "back" && currentImageIndex === 0) {
            setCurrentImage(projectImage[projectImage.length - 1]);
            setCurrentImageIndex(projectImage.length - 1);
        } else if (direction === "forward") {
            setCurrentImage(projectImage[currentImageIndex + 1]);
            setCurrentImageIndex(currentImageIndex + 1);
        } else {
            setCurrentImage(projectImage[currentImageIndex - 1]);
            setCurrentImageIndex(currentImageIndex - 1);
        }
    };

    return (
        <Box
            py={6}
            mt={5}
            ref={projectRef}
            style={{
                transform: projectIsInView ? "none" : "translateY(70px)",
                opacity: projectIsInView ? 1 : 0,
                transition: "all 0.6s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
            }}
        >
            <Stack direction={{ base: "column", md: "row" }} position={"relative"}>
                <Flex flex={1} minH="400px" maxH="400px">
                    <Image
                        objectFit="cover"
                        boxSize="100%"
                        w={{ sm: "100%", md: "440px", xl: "800px" }}
                        src={currentImage}
                        boxShadow={"2xl"}
                        border="1px"
                        borderRadius="lg"
                        borderColor="gray.900"
                        onMouseEnter={onMouseEnter}
                        onMouseLeave={onMouseLeave}
                        style={{
                            transform: `${hover ? "scale(1.05,1.05)" : "scale(1)"}`,
                            transition: "1s",
                        }}
                    />
                    <Stack direction={"row"} position="absolute" top="20px" left="10px">
                        <Box>
                            <Text
                                backgroundColor="blackAlpha.700"
                                textAlign={"center"}
                                borderRadius={"2xl"}
                                p={"5px"}
                            >
                                {currentImageIndex + 1} / {projectImage.length}
                            </Text>
                        </Box>
                        <Button
                            onClick={() => handlePictureChange("back")}
                            borderRadius="3xl"
                            size="sm"
                            bg="blackAlpha.700"
                            _hover={{ bg: "blackAlpha.500" }}
                        >
                            <FontAwesomeIcon icon={faArrowLeft} />
                        </Button>
                        <Button
                            onClick={() => handlePictureChange("forward")}
                            borderRadius="3xl"
                            size="sm"
                            bg="blackAlpha.700"
                            _hover={{ bg: "blackAlpha.500" }}
                        >
                            <FontAwesomeIcon icon={faArrowRight} />
                        </Button>
                    </Stack>
                </Flex>

                <Stack
                    w={{ sm: "100%", md: "440px" }}
                    height={{ sm: "476px", md: "15rem" }}
                    direction={{ base: "column", md: "row" }}
                    bg={useColorModeValue("white", "gray.900")}
                    boxShadow={"2xl"}
                    p={4}
                    position={"absolute"}
                    right="0px"
                    top="20%"
                    borderRadius={"lg"}
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
                            mt={"2rem"}
                            direction={"row"}
                            padding={2}
                            justifyContent={"center"}
                            alignItems={"center"}
                        >
                            <Link flex={1} href={githubLink}>
                                <Button
                                    fontSize={"sm"}
                                    rounded={"full"}
                                    _focus={{
                                        bg: "gray.200",
                                    }}
                                    width={"100px"}
                                >
                                    Github
                                </Button>
                            </Link>
                            <Link flex={1} href={demoInfo.demoLink}>
                                <Button
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
                                    disabled={!demoInfo.demoable}
                                    width={"100px"}
                                >
                                    Demo
                                </Button>
                            </Link>
                        </Stack>
                    </Stack>
                </Stack>
            </Stack>
        </Box>
    );
};

export default ProjectCard;
