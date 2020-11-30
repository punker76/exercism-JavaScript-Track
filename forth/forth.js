//
// This is only a SKELETON file for the 'Forth' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const integer_arithmetic = ["+", "-", "*", "/"];
const stack_manipulation = ["DUP", "DROP", "SWAP", "OVER"];

function escapeRegExp(str) {
  return str.replace(/[.*+\-?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
}

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(escapeRegExp(find), 'g'), replace);
}

export class Forth {
  constructor() {
    this._stack = [];
    this._words = new Map();
  }

  evaluate(input) {
    if (!input) {
      return;
    }

    input = input.toUpperCase();

    var patt = /: (.+ .+)+ ;/i;
    var word_def = patt.exec(input);
    if (word_def) {
      var idx = word_def[1].indexOf(" ");

      var key = word_def[1].substr(0, idx);
      if (!isNaN(Number(key))) {
        throw new Error("Invalid definition");
      }

      this._words.set(key, word_def[1].substr(idx + 1));
      return;
    }

    for (var [key, value] of this._words) {
      input = replaceAll(input, key, value);
    }

    for (var c of input.split(" ")) {
      var manipulation = stack_manipulation.find(x => x === c);

      if (manipulation) {
        this.#handleManipulation(manipulation);
        continue;
      }

      var arithmetic = integer_arithmetic.find(x => x === c);
      if (arithmetic) {
        this.#handleArithmetic(arithmetic);
        continue;
      }

      var number = Number(c);
      if (isNaN(number)) {
        throw new Error("Unknown command");
      }

      this.stack.push(number);
    }
  }

  #handleManipulation(manipulation) {
    switch (manipulation) {
      case "DUP":
        var value = this._stack[this._stack.length - 1];

        if (isNaN(value)) {
          throw new Error("Stack empty");
        }

        this._stack.push(value);

        break;

      case "DROP":
        var value = this._stack.pop();

        if (isNaN(value)) {
          throw new Error("Stack empty");
        }

        break;

      case "SWAP":
        var value2 = this._stack.pop();
        var value1 = this._stack.pop();

        if (isNaN(value1) || isNaN(value2)) {
          throw new Error("Stack empty");
        }

        this._stack.push(value2);
        this._stack.push(value1);

        break;

      case "OVER":
        var value = this._stack[this._stack.length - 2];

        if (isNaN(value)) {
          throw new Error("Stack empty");
        }

        this._stack.push(value);

        break;
    }
  }

  #handleArithmetic(arithmetic) {
    var value2 = this._stack.pop();
    var value1 = this._stack.pop();

    if (isNaN(value1) || isNaN(value2)) {
      throw new Error("Stack empty");
    }

    switch (arithmetic) {
      case "+":
        this.stack.push(value1 + value2);
        break;
      case "-":
        this.stack.push(value1 - value2);
        break;
      case "*":
        this.stack.push(value1 * value2);
        break;
      case "/":
        if (value2 === 0) {
          throw new Error("Division by zero");
        }

        this.stack.push(Math.floor(value1 / value2));
        break;
    }
  }

  get stack() {
    return this._stack;
  }

}
