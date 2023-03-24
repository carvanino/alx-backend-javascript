export default class Building {
  constructor(sqrt) {
    this._sqrt = sqrt;
    if (this.constructor !== Building) {
      if (typeof this.evacuationWarningMessage !== 'function') {
        throw new Error('Class extending Building must override evacuationWarningMessage');
      }
    }
  }

  get sqrt() {
    return this._sqrt;
  }

  set sqrt(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Sqrt must be a number');
    }
    this._sqrt = value;
  }
}
