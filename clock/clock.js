//
// This is only a SKELETON file for the 'Clock' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Clock {
  constructor(hours, minutes) {
    this.time = new Date((minutes ? minutes + hours * 60 : hours * 60) * 60 * 1000);
  }

  toString() {
    return `${this.time.getUTCHours().toString().padStart(2, '0')}:${this.time.getUTCMinutes().toString().padStart(2, '0')}`;
  }

  plus(minutes) {
    this.time.setMinutes(this.time.getMinutes() + minutes);
    return this;
  }

  minus(minutes) {
    this.plus(-minutes);
    return this;
  }

  equals(clock) {
    return clock.toString() === this.toString();
  }
}
