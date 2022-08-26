import { Icon } from "@chakra-ui/icons";
import React from "react";

const TechIcon = ({
    icon,
    width,
    height,
    aboutHeaderIsInView,
}: {
    icon: any;
    width: string;
    height: string;
    aboutHeaderIsInView: any;
}) => {
    return (
        <Icon
            h={width}
            w={height}
            as={icon}
            style={{
                animation: "fadeIn 3s",
                opacity: "0",
                animationFillMode: "forwards",
                animationDelay: "2s",
                transition: "0.5s",
            }}
            _hover={{ transform: "scale(1.2)", color: "#C7DE50" }}
        />
    );
};

export default TechIcon;
