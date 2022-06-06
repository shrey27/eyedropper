import { createContext, useContext, useState } from "react";
import { base64Img } from "../utility/constant";

const CanvasContext = createContext();

const initialPosition = {
  eyedropper1: {
    x: 50,
    y: 50,
  },
  eyedropper2: {
    x: 300,
    y: 150,
  },
  eyedropper3: {
    x: 150,
    y: 300,
  },
  eyedropper4: {
    x: 400,
    y: 250,
  },
  eyedropper5: {
    x: 250,
    y: 400,
  },
};

const initialColors = {
  eyedropper1: "#FFFFFF",
  eyedropper2: "#FFFFFF",
  eyedropper3: "#FFFFFF",
  eyedropper4: "#FFFFFF",
  eyedropper5: "#FFFFFF",
};

const CanvasProvider = ({ children }) => {
  const [color, setColor] = useState(initialColors);
  const [eyedropperPosition, seteyedropperPositionition] =
    useState(initialPosition);
  const [image, setImage] = useState(base64Img);

  return (
    <CanvasContext.Provider
      value={{
        eyedropperPosition,
        seteyedropperPositionition,
        color,
        setColor,
        image,
        setImage,
      }}
    >
      {children}
    </CanvasContext.Provider>
  );
};

const useCanvas = () => useContext(CanvasContext);

export { CanvasProvider, useCanvas };
