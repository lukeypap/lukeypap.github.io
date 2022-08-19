import NavBar from "./components/Navbar";
import Header from "./Header";
import { Box, Image } from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/color-mode";
import Projects from "./Projects";
import headerSVG from "./resources/triangleAsymmetricalNegative.svg";

function App() {
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <>
            <NavBar />
            <Header />
            <Projects />
        </>
    );
}

export default App;
