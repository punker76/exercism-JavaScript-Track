//
// This is only a SKELETON file for the 'Perfect Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const classify = (number) => {
  if (number <= 0) {
    throw new Error('Classification is only possible for natural numbers.');
  }

  let divisors = [];

  for (let div = 1; div < number; div++) {
    if (number % div === 0) {
      divisors.push(div);
    }
  }

  var sum = divisors.length > 0 ? divisors.reduce((v1, v2) => v1 + v2) : 0;

  if (sum === number) {
    return "perfect";
  }
  else if (sum > number) {
    return "abundant";
  }

  return "deficient";
};
