//
// This is only a SKELETON file for the 'Change' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Change {
  calculate(coinArray, target) {
    var currentTarget = Number(target);

    if (currentTarget < 0) {
      throw "Negative totals are not allowed.";
    }

    if (currentTarget === 0) {
      return [];
    }

    if (!coinArray.some(c => c <= currentTarget)) {
      throw `The total ${currentTarget} cannot be represented in the given currency.`;
    }

    let result = this.coinChange(coinArray, currentTarget);

    if (result.length === 0) {
      throw `The total ${target} cannot be represented in the given currency.`;
    }

    return result;
  }

  // https://www.codesdope.com/course/algorithms-coin-change/
  coinChange(coins, target) {
    const INF = 100000;

    var M = Array(target + 1);
    M[0] = 0;

    var S = Array(target + 1);
    S[0] = 0;

    for (var j = 1; j <= target; j++) {
      var minimum = INF;
      var coin = 0;

      for (var i = 0; i < coins.length; i++) {
        if (j >= coins[i]) {
          if ((1 + M[j - coins[i]]) < minimum) {
            minimum = 1 + M[j - coins[i]];
            coin = i;
          }
        }
      }

      M[j] = minimum;
      S[j] = coin;
    }

    let result = [];

    let ways = M[target];
    if (ways === INF) {
      return result;
    }

    var l = target;
    while (l > 0) {
      result.push(coins[S[l]]);
      l = l - coins[S[l]];
    }

    return result;
  }

  calculate_first_try(coinArray, target) {
    var currentTarget = Number(target);

    if (currentTarget < 0) {
      throw "Negative totals are not allowed.";
    }

    var result = [];

    if (currentTarget === 0) {
      return result;
    }

    coinArray.reverse();

    if (!coinArray.some(c => c <= currentTarget)) {
      throw `The total ${currentTarget} cannot be represented in the given currency.`;
    }

    while (true) {
      for (var coin of coinArray.filter(c => c <= currentTarget)) {
        var rest = coin % currentTarget;
        if (rest === 0) {
          result.unshift(coin);
          currentTarget -= coin;
        }
        else {
          result.unshift(coin);
          currentTarget -= rest;
          break;
        }

        if (currentTarget <= 0) break;
      }

      if (currentTarget <= 0) break;
      if (!coinArray.some(c => c <= currentTarget)) break;
    }

    if (result.length === 0 || currentTarget > 0) {
      throw `The total ${target} cannot be represented in the given currency.`;
    }

    return result;
  }
}
