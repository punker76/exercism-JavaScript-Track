//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const gigasecond = (date) => {
  const gigaSound = 10**9;
  let result = new Date(date);
  result.setUTCSeconds(result.getSeconds() + gigaSound);
  return result;
};
