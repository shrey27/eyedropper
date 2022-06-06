import React, { useRef } from "react";
import { Flex } from "@chakra-ui/react";
import { Canvas } from "./Canvas";
import { Colors } from "./Colors";

export default function CanvasWithPalette() {
  const componentRef = useRef();
  return (
    <Flex
      width={["100%", "50%"]}
      height={{
        base: "100%",
        md: "container",
      }}
      justifyContent="center"
    >
      <Flex
        flexDirection="column"
        justifyContent="flex-start"
        alignItems="center"
        ref={componentRef}
      >
        <Canvas />
        <Colors />
      </Flex>
    </Flex>
  );
}
