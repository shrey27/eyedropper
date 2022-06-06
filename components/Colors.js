import { Flex, Box, Text } from "@chakra-ui/react";
import { useCanvas } from "../context/CanvasContext";
import { dropperList } from "../utility/functions";

export const Colors = () => {
  const { color } = useCanvas();

  return (
    <Flex gap={1} color="white" textAlign="center" justifyContent="center">
      {dropperList.map((item, index) => {
        return (
          <Flex flexDirection="column" position="relative" key={item + index}>
            <Box w="20" h="20" bgColor={color[item]} cursor="pointer"></Box>
            <Text
              color="black"
              fontWeight="600"
              fontSize={18}
              marginTop={1}
              cursor="pointer"
            >
              {color[item]}
            </Text>
          </Flex>
        );
      })}
    </Flex>
  );
};
