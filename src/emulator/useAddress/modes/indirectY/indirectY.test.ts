import { CPU } from '@emulator/cpu'
import { indirectY } from './indirectY'

describe('indirectY', () => {
  it('should have propper name', () => {
    expect(indirectY.name).toBe('indirect-y')
  })
  it('should return propper 2 bytes address', () => {
    const cpu = new CPU()
    const y = 0x01
    const counter = 0xa0
    const pointerU8 = 0xb0
    const pointerU16 = 0xccc0
    const expectedAdress = pointerU16
    cpu.registerY.write(y)
    cpu.programCounter.to(counter)
    cpu.memoryManager.writeU8(counter, pointerU8)
    cpu.memoryManager.writeU16(pointerU8, expectedAdress)
    expect(indirectY.derefAddress(cpu)).toBe(expectedAdress + y)
  })
  it('should increment program counter by 1', () => {
    const cpu = new CPU()
    const currentCounter = cpu.programCounter.current
    indirectY.derefAddress(cpu)
    expect(cpu.programCounter.current).toBe(currentCounter + 1)
  })
})
