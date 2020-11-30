//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const COLORS = ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"]; 

export const decodedValue = (colors) => {
  let result = colors
    .slice(0, 2)
    .map((value, index, array) => { return COLORS.indexOf(value); })
    .join("");
  return parseInt(result);
};
