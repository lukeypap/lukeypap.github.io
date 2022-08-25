import {
    Container,
    Flex,
    Box,
    Text,
    IconButton,
    Button,
    VStack,
    HStack,
    Wrap,
    WrapItem,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputLeftElement,
    Textarea,
    Link,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faUser } from "@fortawesome/free-solid-svg-icons";
import { BsGithub, BsGlobe } from "react-icons/bs";
import { MdEmail, MdLocationPin } from "react-icons/md";
import { useRef } from "react";
import { useInView } from "framer-motion";

const ContactForm = () => {
    const contactRef = useRef(null);
    const contactIsInView = useInView(contactRef, { once: true });

    return (
        <Container
            maxW="full"
            centerContent
            mt={"100px"}
            ref={contactRef}
            style={{
                transform: contactIsInView ? "none" : "translateY(70px)",
                opacity: contactIsInView ? 1 : 0,
                transition: "all 0.6s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
            }}
        >
            <Flex>
                <Box
                    bg="#202838"
                    color="white"
                    borderRadius="lg"
                    m={{ sm: 4, md: 16, lg: 10 }}
                    p={{ sm: 5, md: 5, lg: 16 }}
                    boxShadow="2xl"
                >
                    <Box p={4}>
                        <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
                            <WrapItem>
                                <Box>
                                    <Text mt={{ sm: 3, md: 3, lg: 5 }} color="gray.500">
                                        Fill out the form to get in touch!
                                    </Text>
                                    <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                                        <VStack pl={0} spacing={3} alignItems="flex-start">
                                            <Button
                                                size="md"
                                                height="48px"
                                                width="200px"
                                                variant="ghost"
                                                color="#DCE2FF"
                                                _hover={{ border: "2px solid #8200D9" }}
                                                leftIcon={<BsGlobe color="#8200D9" size="20px" />}
                                            >
                                                lukeypap.github.io
                                            </Button>
                                            <Button
                                                size="md"
                                                height="48px"
                                                width="200px"
                                                variant="ghost"
                                                color="#DCE2FF"
                                                _hover={{ border: "2px solid #8200D9" }}
                                                leftIcon={<MdEmail color="#8200D9" size="20px" />}
                                            >
                                                <Link href="mailto:luke.pap@live.co.uk">
                                                    luke.pap@live.co.uk
                                                </Link>
                                            </Button>
                                            <Button
                                                size="md"
                                                height="48px"
                                                width="200px"
                                                variant="ghost"
                                                color="#DCE2FF"
                                                _hover={{ border: "2px solid #8200D9" }}
                                                leftIcon={
                                                    <MdLocationPin size="20px" color="#8200D9" />
                                                }
                                            >
                                                York, UK
                                            </Button>
                                        </VStack>
                                    </Box>
                                    <HStack
                                        mt={{ lg: 10, md: 10 }}
                                        spacing={5}
                                        px={5}
                                        justifyContent="center"
                                    >
                                        <Link href="https://github.com/lukeypap">
                                            <IconButton
                                                aria-label="github"
                                                variant="ghost"
                                                size="lg"
                                                isRound={true}
                                                _hover={{ bg: "#8200D9" }}
                                                icon={<BsGithub size="28px" />}
                                            />
                                        </Link>
                                    </HStack>
                                </Box>
                            </WrapItem>
                            <WrapItem>
                                <Box bg="white" borderRadius="lg">
                                    <Box m={8} color="#0B0E3F">
                                        <VStack spacing={5}>
                                            <FormControl id="name">
                                                <FormLabel fontSize={"sm"}>Full Name</FormLabel>
                                                <InputGroup bg="gray.50">
                                                    <InputLeftElement
                                                        pointerEvents="none"
                                                        children={<FontAwesomeIcon icon={faUser} />}
                                                    />
                                                    <Input
                                                        type="text"
                                                        size="md"
                                                        borderColor="gray.300"
                                                        border="1px"
                                                    />
                                                </InputGroup>
                                            </FormControl>
                                            <FormControl id="email">
                                                <FormLabel fontSize={"sm"}>Email</FormLabel>
                                                <InputGroup bg="gray.50" borderRadius={"2xl"}>
                                                    <InputLeftElement
                                                        pointerEvents="none"
                                                        children={
                                                            <FontAwesomeIcon icon={faEnvelope} />
                                                        }
                                                    />
                                                    <Input
                                                        type="text"
                                                        size="md"
                                                        borderColor="gray.300"
                                                        border="1px"
                                                    />
                                                </InputGroup>
                                            </FormControl>
                                            <FormControl id="message">
                                                <FormLabel fontSize={"sm"}>Message</FormLabel>
                                                <Textarea
                                                    fontSize={"sm"}
                                                    bg="gray.50"
                                                    borderRadius={"lg"}
                                                    _hover={{
                                                        borderRadius: "gray.300",
                                                    }}
                                                    placeholder="Type your message in here..."
                                                    borderColor="gray.300"
                                                    border="1px"
                                                />
                                            </FormControl>
                                            <FormControl id="name" float="right">
                                                <Button
                                                    mt={"15px"}
                                                    variant="solid"
                                                    bg="#8200D9"
                                                    color="white"
                                                    _hover={{ bg: "#a330f0" }}
                                                    w="100%"
                                                    disabled
                                                >
                                                    Send Message
                                                </Button>
                                            </FormControl>
                                        </VStack>
                                    </Box>
                                </Box>
                            </WrapItem>
                        </Wrap>
                    </Box>
                </Box>
            </Flex>
        </Container>
    );
};

export default ContactForm;
