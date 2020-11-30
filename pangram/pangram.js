//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isPangram = (input) => {
  if (!input) {
    return false;
  }

  var set = new Set(
    [...input.toUpperCase()].filter(v => { return v.charCodeAt(0) >= 65 && v.charCodeAt(0) <= 90 })
  );
  return set.size >= 26;
};

export const isPangram1st = (input) => {
  if (!input) {
    return false;
  }

  input = input.toUpperCase();

  var set = new Set();

  for (var i = 0; i < input.length; i++) {
    var char = input.charCodeAt(i);
    if (char >= 65 && char <= 90) {
      set.add(input.charAt(i));
    }
  }

  return set.size >= 26;
};
