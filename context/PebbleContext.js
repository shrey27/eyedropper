import { createContext, useContext, useState } from "react";

const PebbleContext = createContext();

const initialPosition = {
  picker1: {
    x: 180,
    y: 80,
  },
  picker2: {
    x: 130,
    y: 200,
  },
  picker3: {
    x: 100,
    y: 120,
  },
  picker4: {
    x: 10,
    y: 210,
  },
  picker5: {
    x: 80,
    y: 100,
  },
};

const PebbleProvider = ({ children }) => {
  const [pickerPos, setPickerPosition] = useState(initialPosition);
  const [color, setColor] = useState({
    picker1: "",
    picker2: "",
    picker3: "",
    picker4: "",
    picker5: "",
  });

  return (
    <PebbleContext.Provider
      value={{
        pickerPos,
        setPickerPosition,
        color,
        setColor,
      }}
    >
      {children}
    </PebbleContext.Provider>
  );
};

const usePebble = () => useContext(PebbleContext);

export { PebbleProvider, usePebble };
