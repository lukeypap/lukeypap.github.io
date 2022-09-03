import {
    Box,
    Button,
    Center,
    Image,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Stack,
    Text,
} from "@chakra-ui/react";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
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
    const [currentImage, setCurrentImage] = useState(projectInfo.projectImage[0]);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handlePictureChange = (direction: string) => {
        if (direction === "forward" && currentImageIndex === projectInfo.projectImage.length - 1) {
            setCurrentImage(projectInfo.projectImage[0]);
            setCurrentImageIndex(0);
        } else if (direction === "back" && currentImageIndex === 0) {
            setCurrentImage(projectInfo.projectImage[projectInfo.projectImage.length - 1]);
            setCurrentImageIndex(projectInfo.projectImage.length - 1);
        } else if (direction === "forward") {
            setCurrentImage(projectInfo.projectImage[currentImageIndex + 1]);
            setCurrentImageIndex(currentImageIndex + 1);
        } else {
            setCurrentImage(projectInfo.projectImage[currentImageIndex - 1]);
            setCurrentImageIndex(currentImageIndex - 1);
        }
    };

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
