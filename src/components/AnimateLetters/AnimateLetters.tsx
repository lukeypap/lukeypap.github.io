import "./textAnimation.scss";
import { Text } from "@chakra-ui/react";

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
                <Text
                    fontSize="5xl"
                    color={color}
                    style={{ display: "inline-block" }}
                    key={letter + i}
                    className={`text-animate _${i + id}`}
                >
                    {letter}
                </Text>
            ))}
        </span>
    );
};

export default AnimateLetters;
