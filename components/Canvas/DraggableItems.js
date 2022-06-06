import { Box } from "@chakra-ui/react";
import Draggable from "react-draggable";

export const DraggableItem = ({ mouseMoveHandler, color, xPos, yPos, id }) => {
  return (
    <Draggable
      bounds=".draggable-container"
      onDrag={mouseMoveHandler}
      defaultPosition={{ x: xPos, y: yPos }}
    >
      <Box
        w={8}
        h={8}
        borderRadius="full"
        backgroundColor={color}
        id={id}
        border="4px solid"
        borderColor={color[1] === "f" || color[1] === "e" ? "black" : "white"}
        cursor="pointer"
        display="inline-block"
      />
    </Draggable>
  );
};
