const valueSymbol = Symbol.for('statusValue')
const flagMap = {
  N: 0b1000_0000,
  V: 0b0100_0000,
  '-': 0b0010_0000,
  B: 0b0001_0000,
  D: 0b0000_1000,
  I: 0b0000_0100,
  Z: 0b0000_0010,
  C: 0b0000_0001,
} as const
type Flags = keyof typeof flagMap

export class Status {
  private readonly [valueSymbol] = new Uint8Array(1)
  get current(): number {
    return this[valueSymbol].at(0) ?? 0
  }

  getFlag(flag: Flags) {
    return (this.current & flagMap[flag]) === flagMap[flag]
  }

  setFlag(flag: Flags, status: boolean) {
    const flagStatus = this.getFlag(flag)
    if (status && flagStatus) return

    const updatedFlags = status ? flagMap[flag] | this.current : ~-flagMap[flag] & this.current

    this[valueSymbol].set([updatedFlags], 0)
  }

  reset() {
    this[valueSymbol].set([0], 0)
  }
}
