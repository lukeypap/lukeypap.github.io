import "./textAnimation.scss";
import { Text } from "@chakra-ui/react";

const AnimateLetters = ({
    letterClass,
    wordArray,
    id,
}: {
    letterClass: string;
    wordArray: string[];
    id: number;
}) => {
    return (
        <span>
            {wordArray.map((letter, i) => (
                <Text
                    fontSize="5xl"
                    color={"red.600"}
                    style={{ display: "inline-block" }}
                    key={letter + i}
                    className={`${letterClass} _${i + id}`}
                >
                    {letter}
                </Text>
            ))}
        </span>
    );
};

export default AnimateLetters;
