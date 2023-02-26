import { MemoryManager } from './MemoryManager'

describe('MemoryManager', () => {
  it('should be able to load a program', () => {
    const memoryManager = new MemoryManager()
    const program = new Uint8Array([0x01])
    memoryManager.loadProgram(program)
    expect(memoryManager.readU8(memoryManager.PROGRAM_START_INDEX)).toBe(program[0])
  })

  it('should be able to read/write 1 byte in memory', () => {
    const address = 0x8000
    const value = 0xaa
    const memoryManager = new MemoryManager()
    memoryManager.writeU8(address, value)
    expect(memoryManager.readU8(address)).toBe(value)
  })

  it('should be able to read/write 2 bytes in memory in little endian', () => {
    const address = 0x8000
    const value = 0xaabb
    const memoryManager = new MemoryManager()
    memoryManager.writeU16(address, value)
    expect(memoryManager.readU16(address)).toBe(value)
  })
})
