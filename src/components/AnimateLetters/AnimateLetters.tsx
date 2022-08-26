import "./textAnimation.scss";
import { Heading, Text } from "@chakra-ui/react";

const AnimateLetters = ({
    wordArray,
    id,
    color,
}: {
    wordArray: string[];
    id: number;
    color: string;
}) => {
    return (
        <span>
            {wordArray.map((letter, i) => (
                <Heading
                    fontSize="5xl"
                    color={color}
                    style={{ display: "inline-block" }}
                    key={letter + i}
                    className={`text-animate _${i + id}`}
                >
                    {letter}
                </Heading>
            ))}
        </span>
    );
};

export default AnimateLetters;
