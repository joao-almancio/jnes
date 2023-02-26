const memorySymbol = Symbol.for('memory')

export class MemoryManager {
  readonly PROGRAM_MEMORY_SIZE = 0xffff
  readonly PROGRAM_START_INDEX = 0x8000
  private readonly [memorySymbol] = new Uint8Array(this.PROGRAM_MEMORY_SIZE)

  readU8(address: number) {
    const value = this[memorySymbol].at(address)
    if (value === undefined) throw new Error(`offset ${address.toString(16)} is out of bounds`)
    return value
  }

  readU16(address: number) {
    const lo = this.readU8(address)
    const hi = this.readU8(address + 1)
    return (hi << 8) | lo
  }

  writeU8(address: number, data: number) {
    this[memorySymbol].set([data], address)
  }

  writeU16(address: number, data: number) {
    const hi = data >> 8
    const lo = data & 0xff
    this[memorySymbol].set([lo, hi], address)
  }

  loadProgram(program: Uint8Array) {
    this[memorySymbol].set(program, this.PROGRAM_START_INDEX)
  }
}
