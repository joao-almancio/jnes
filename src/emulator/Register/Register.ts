const valueSymbol = Symbol.for('registerValue')
export class Register {
  private readonly [valueSymbol] = new Uint8Array(1)
  read() {
    return this[valueSymbol].at(0) || 0
  }
  write(value: number) {
    this[valueSymbol].set([value], 0)
  }

  isZero() {
    return this.read() === 0
  }

  mostSignificantBit() {
    return !!(this.read() & 0b1000_0000)
  }
}
