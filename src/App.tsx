import NavBar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import { Box } from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/color-mode";
import Projects from "./components/Projects/Projects";
import bgSvg from "./resources/bgdots2.svg";
import bgSvgLight from "./resources/bgdotslight.svg";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <Box
            backgroundImage={colorMode === "dark" ? bgSvg : bgSvgLight}
            // bgColor={colorMode === "dark" ? "#001220" : "white"}
        >
            <NavBar />
            <Header />
            <Projects />
            <About />
            <Contact />
            <Footer />
        </Box>
    );
}

export default App;
