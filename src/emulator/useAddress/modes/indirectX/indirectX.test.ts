import { CPU } from '@emulator/cpu'
import { indirectX } from './indirectX'

describe('indirectX', () => {
  it('should have propper name', () => {
    expect(indirectX.name).toBe('indirect-x')
  })
  it('should return propper 2 bytes address', () => {
    const cpu = new CPU()
    const x = 0x01
    const counter = 0xaa
    const pointerU8 = 0xb0
    const pointer = pointerU8 + x
    const expectedAdress = 0xaabb
    cpu.registerX.write(x)
    cpu.programCounter.to(counter)
    cpu.memoryManager.writeU8(counter, pointerU8)
    cpu.memoryManager.writeU16(pointer, expectedAdress)
    expect(indirectX.derefAddress(cpu)).toBe(expectedAdress)
  })
  it('should increment program counter by 1', () => {
    const cpu = new CPU()
    const currentCounter = cpu.programCounter.current
    indirectX.derefAddress(cpu)
    expect(cpu.programCounter.current).toBe(currentCounter + 1)
  })
})
