//
// This is only a SKELETON file for the 'Difference Of Squares' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Squares {
  _sumOfSquares = 0;
  _squareOfSum = 0;

  constructor(count) {
    for (let n = 1; n <= count; n++) {
      this._sumOfSquares += n * n;
      this._squareOfSum += n;
    }
    this._squareOfSum *= this._squareOfSum;
  }

  get sumOfSquares() {
    return this._sumOfSquares;
  }

  get squareOfSum() {
    return this._squareOfSum;
  }

  get difference() {
    return this.squareOfSum - this.sumOfSquares;
  }
}
