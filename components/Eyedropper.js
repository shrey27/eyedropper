import { Box, Flex } from "@chakra-ui/react";
import { Canvas } from "./Canvas/Canvas";
import { Palette } from "./Palette/Palette";
import React, { useRef } from "react";

export default function CanvasWithPalette() {
  const componentRef = useRef();
  return (
    <Flex
      width={["100%", "100%", "100%", "50%"]}
      height={{
        base: "100%",
        md: "container",
      }}
      justifyContent="center"
    >
      <Flex
        flexDirection="column"
        ref={componentRef}
        p={6}
        justifyContent="flex-start"
      >
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="flex-start"
          className="canvas-container"
        >
          <Canvas />
        </Box>
        <Palette />
      </Flex>
    </Flex>
  );
}
