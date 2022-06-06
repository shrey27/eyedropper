import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import { CanvasProvider } from "../context/CanvasContext";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <CanvasProvider>
        <Component {...pageProps} />
      </CanvasProvider>
    </ChakraProvider>
  );
}

export default MyApp;
