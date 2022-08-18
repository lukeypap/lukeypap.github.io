import NavBar from "./components/Navbar";
import Header from "./Header";
import { Box, Image } from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/color-mode";
import Projects from "./Projects";
import headerSVG from "./resources/triangleAsymmetricalNegative.svg";

function App() {
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <Box bg={colorMode === "light" ? "gray.50" : "gray.800"}>
            <NavBar />
            <Header />
            <Projects />
        </Box>
    );
}

export default App;
