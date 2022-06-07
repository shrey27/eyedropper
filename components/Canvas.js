import { Flex, Box } from "@chakra-ui/react";
import { useRef, useEffect, useState } from "react";
import { useCanvas } from "../context/CanvasContext";
import {
  getAverageColor,
  AVGWIDTH,
  AVGHEIGHT,
  dropperList,
  updateDropperValues,
} from "../utility/functions";
import Draggable from "react-draggable";

export const Canvas = () => {
  const {
    eyedropperPosition,
    color,
    setColor,
    image: UploadedImage,
  } = useCanvas();
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
    image.src = UploadedImage;
    image.onload = () => {
      context.clearRect(0, 0, canvas.width, canvas.height);

      let _nW = canvas.width;
      let _nH = (canvas.width * image.height) / image.width;

      if (_nH > canvas.height) {
        _nH = canvas.height;
        _nW = (_nH * image.width) / image.height;
      }
      let x_cood = _nW < canvas.width ? (canvas.width - _nW) / 2 : 0;
      let y_cood = _nH < canvas.height ? (canvas.height - _nH) / 2 : 0;

      setSize({ width: _nW, height: _nH });
      context.drawImage(image, x_cood, y_cood, _nW, _nH);
      let imageData = updateDropperValues(eyedropperPosition, context);
      setColor({ ...imageData });
    };
  }, [eyedropperPosition, setColor, UploadedImage]);

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
