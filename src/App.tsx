import NavBar from "./components/Navbar";
import Header from "./Header";
import { Box, Image } from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/color-mode";
import Projects from "./Projects";
import bgSvg from "./resources/bgdots2.svg";
import bgSvgLight from "./resources/bgdotslight.svg";

function App() {
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <Box
            backgroundImage={colorMode === "dark" ? bgSvg : bgSvgLight}
            style={{
                transform: "scale 1.1",
                transition: "1s",
                animationIterationCount: "infinite",
            }}
        >
            <NavBar />
            <Header />
            <Projects />
        </Box>
    );
}

export default App;
