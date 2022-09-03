import {
    Button,
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
} from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

interface props {
    isOpen: any;
    onClose: any;
    projectInfo: projectInfo;
}

interface projectInfo {
    title: string;
    description: string;
    tech: string[];
    projectImage: string[];
    githubLink: string;
    demoInfo: { demoLink: string; demoable: boolean };
    timeScale: number;
}

const ProjectModal = ({ isOpen, onClose, projectInfo }: props) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose} size={"xl"}>
            <ModalOverlay />
            <ModalContent>
                <Carousel autoPlay>
                    {projectInfo.projectImage.map((image) => (
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                objectFit: "fill",
                                height: "300px",
                            }}
                        >
                            <img src={image} alt="projectImage" />
                        </div>
                    ))}
                </Carousel>
                <ModalHeader>{projectInfo.title}</ModalHeader>
                <ModalBody>
                    <p>{projectInfo.description}</p>
                </ModalBody>

                <ModalFooter>
                    <Button colorScheme="blue" mr={3} onClick={onClose}>
                        Close
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
};

export default ProjectModal;
