export const AVGWIDTH = 8;
export const AVGHEIGHT = 8;
export const dropperList = [
  "eyedropper1",
  "eyedropper2",
  "eyedropper3",
  "eyedropper4",
  "eyedropper5",
];

export const valueToHex = (value) => {
  const hex = value?.toString(16);
  if (value < 16) {
    hex = "0" + hex;
  }
  return hex;
};

export const rgbToHex = (r, g, b) => {
  return "#" + valueToHex(r) + valueToHex(g) + valueToHex(b);
};

export const getAverageColor = (pixelData) => {
  const pixelDataLength = pixelData.length;
  let avg = { r: 0, g: 0, b: 0 };
  let total = 0;
  for (let i = 0; i < pixelDataLength; i += 4) {
    avg.r += pixelData[i];
    avg.g += pixelData[i + 1];
    avg.b += pixelData[i + 2];
    total++;
  }

  avg.r = Math.round(avg.r / total);
  avg.g = Math.round(avg.g / total);
  avg.b = Math.round(avg.b / total);

  return rgbToHex(avg.r, avg.g, avg.b);
};

export function initialize(eyedropperPosition, context) {
  let data = {};
  Object.keys(eyedropperPosition).map((item) => {
    let temp = context.getImageData(
      eyedropperPosition[item].x,
      eyedropperPosition[item].y,
      AVGWIDTH,
      AVGHEIGHT
    ).data;
    data[item] = rgbToHex(temp[0], temp[1], temp[2]);
  });
  return data;
}
