const valueSymbol = Symbol.for('counterValue')
export class Counter {
  private readonly [valueSymbol] = new Uint16Array(1)
  get current() {
    return this[valueSymbol].at(0) ?? 0
  }
  next(increment: number = 1) {
    this[valueSymbol].set([this.current + increment], 0)
  }
  to(address: number) {
    this[valueSymbol].set([address], 0)
  }
  constructor(initialAddress: number = 0) {
    this.to(initialAddress)
  }
}
