import NavBar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import { Box } from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/color-mode";
import Projects from "./components/Projects/Projects";
import bgSvg from "./resources/bgdots2.svg";
import bgSvgLight from "./resources/bgdotslight.svg";
import stars from "./resources/stars.svg";
import starsFixed from "./resources/starsFixed.svg";
import starsFill from "./resources/starsFill.svg";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <Box
            backgroundImage={colorMode === "dark" ? starsFixed : starsFill}
            // bgColor={colorMode === "dark" ? "#001220" : "#252525"}
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
