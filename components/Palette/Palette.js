import { Flex } from "@chakra-ui/react";
import { usePebble } from "../../context/PebbleContext";
import { PaletteBox } from "./PaletteBox";

export const Palette = () => {
  const { color } = usePebble();

  return (
    <Flex
      w="full"
      gap={1.5}
      textAlign="center"
      color="white"
      justifyContent="center"
      marginTop={2}
    >
      <PaletteBox
        color={color?.picker1}
        topLeft={0}
        topRight={0}
        botLeft={15}
        botRight={0}
      />
      <PaletteBox
        color={color?.picker2}
        topLeft={0}
        topRight={0}
        botLeft={0}
        botRight={0}
      />
      <PaletteBox
        color={color?.picker3}
        topLeft={0}
        topRight={0}
        botLeft={0}
        botRight={0}
      />
      <PaletteBox
        color={color?.picker4}
        topLeft={0}
        topRight={0}
        botLeft={0}
        botRight={0}
      />
      <PaletteBox
        color={color?.picker5}
        topLeft={0}
        topRight={0}
        botLeft={0}
        botRight={15}
      />
    </Flex>
  );
};
