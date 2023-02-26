import { CPU } from '@emulator/cpu'
import { zeroPageX } from './zeroPageX'

describe('zeroPageX', () => {
  it('should have propper name', () => {
    expect(zeroPageX.name).toBe('zero-page-x')
  })
  it('should return propper 1 byte address', () => {
    const cpu = new CPU()
    const x = 0x01
    const counter = 0xa0
    const pointer = 0xb0
    const expectedAdress = pointer + x
    cpu.programCounter.to(counter)
    cpu.memoryManager.writeU8(counter, pointer)
    cpu.registerX.write(x)
    expect(zeroPageX.derefAddress(cpu)).toBe(expectedAdress)
  })
  it('should increment program counter by 1', () => {
    const cpu = new CPU()
    const currentCounter = cpu.programCounter.current
    zeroPageX.derefAddress(cpu)
    expect(cpu.programCounter.current).toBe(currentCounter + 1)
  })
})
