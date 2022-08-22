import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { extendTheme, ChakraProvider } from "@chakra-ui/react";
import { TerminalContextProvider } from "react-terminal";
const colors = {
    brand: {
        900: "#1a365d",
        800: "#153e75",
        700: "#2a69ac",
    },
};

const theme = extendTheme({
    colors,
    fonts: {
        heading: `'bitter', 'sans-serif'`,
        body: `'bitter', 'sans-serif'`,
    },
});

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
    <React.StrictMode>
        <TerminalContextProvider>
            <ChakraProvider theme={theme}>
                <App />
            </ChakraProvider>
        </TerminalContextProvider>
    </React.StrictMode>
);
