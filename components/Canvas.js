import { Flex, Box } from "@chakra-ui/react";
import { useRef, useEffect, useState } from "react";
import { useCanvas } from "../context/CanvasContext";
import {
  getAverageColor,
  AVGWIDTH,
  AVGHEIGHT,
  dropperList,
  initialize,
} from "../utility/functions";
import { base64Img } from "../utility/constant";
import Draggable from "react-draggable";

export const Canvas = () => {
  const { eyedropperPosition, color, setColor } = useCanvas();
  const canvasRef = useRef(null);
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });
  const [size, setSize] = useState({
    width: 1000,
    height: 1000,
  });

  const mouseHandler = (e) => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    setPosition((prev) => {
      return { ...prev, x: canvas.offsetLeft, y: canvas.offsetTop };
    });
    let x = e.pageX - position.x;
    let y = e.pageY - position.y;
    const color = getAverageColor(
      context.getImageData(x, y, AVGWIDTH, AVGHEIGHT).data
    );
    setColor((colors) => ({
      ...colors,
      [e.target.id]: color,
    }));
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    const image = new Image();
    image.src = base64Img;
    image.onload = () => {
      context.clearRect(0, 0, canvas.width, canvas.height);
      const aspectRatio = image.width / image.height;
      let newWidth = canvas.width;
      let newHeight = newWidth / aspectRatio;
      if (newHeight > canvas.height) {
        newHeight = canvas.height;
        newWidth = newHeight * aspectRatio;
      }
      let x_cood = newWidth < canvas.width ? (canvas.width - newWidth) / 2 : 0;
      let y_cood =
        newHeight < canvas.height ? (canvas.height - newHeight) / 2 : 0;
      setSize({ width: newWidth, height: newHeight });
      context.drawImage(image, x_cood, y_cood, newWidth, newHeight);
      let imageData = initialize(eyedropperPosition, context);
      setColor({ ...imageData });
    };
  }, [eyedropperPosition, setColor]);

  return (
    <Flex alignItems="center" justifyContent="center">
      <canvas className="canvas" height="500px" width="800px" ref={canvasRef} />
      <Box
        position="absolute"
        className="draggable-container"
        w={`${size.width}px`}
        h={`${size.height}px`}
      >
        {dropperList.map((item) => {
          return (
            <Draggable
              key={item}
              bounds=".draggable-container"
              onDrag={mouseHandler}
              defaultPosition={{
                x: eyedropperPosition[item]?.x,
                y: eyedropperPosition[item]?.y,
              }}
            >
              <Box
                w={8}
                h={8}
                borderRadius="full"
                backgroundColor={color[item]}
                id={item}
                border="4px solid"
                borderColor="white"
                cursor="pointer"
                display="inline-block"
              />
            </Draggable>
          );
        })}
      </Box>
    </Flex>
  );
};
