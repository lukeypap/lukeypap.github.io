import { Box, Container, Text } from "@chakra-ui/react";
import { useRef } from "react";
import layeredStepsContact from "../../resources/layeredStepsContact.svg";
import ContactForm from "./ContactForm";
import AnimateLetters from "../AnimateLetters/AnimateLetters";
import { useInView } from "framer-motion";

const Contact = () => {
    const headerArray = ["C", "o", "n", "t", "a", "c", "t"];
    const contactHeaderRef = useRef(null);
    const contactHeaderIsInView = useInView(contactHeaderRef, { once: true });

    return (
        <Box
            h="1000px"
            bgImage={layeredStepsContact}
            backgroundRepeat={"no-repeat"}
            backgroundSize={"cover"}
            display={"flex"}
            justifyContent={"center"}
            ref={contactHeaderRef}
            id="contact"
        >
            {contactHeaderIsInView ? (
                <Container maxWidth={"6xl"} position={"absolute"} pl="100px" margin={"0 auto"}>
                    <AnimateLetters wordArray={headerArray} id={1} color="" />
                    <Text
                        display="inline-block"
                        fontSize={"7xl"}
                        color={"#8200D9"}
                        pr={"10px"}
                        style={{
                            animation: "fadeIn 2s",
                            opacity: "0",
                            animationFillMode: "forwards",
                            animationDelay: "1s",
                        }}
                    >
                        .
                    </Text>
                </Container>
            ) : (
                ""
            )}

            <ContactForm />
        </Box>
    );
};

export default Contact;
