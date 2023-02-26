import { CPU } from '@emulator/cpu'
import { absoluteX } from './absoluteX'

describe('abosoluteX', () => {
  it('should have propper name', () => {
    expect(absoluteX.name).toBe('absolute-x')
  })
  it('should return propper 2 bytes address', () => {
    const cpu = new CPU()
    const x = 0x01
    const counter = 0xaaaa
    const pointer = 0xbbb0
    const expectedAdress = pointer + x
    cpu.registerX.write(x)
    cpu.programCounter.to(counter)
    cpu.memoryManager.writeU16(counter, pointer)
    expect(absoluteX.derefAddress(cpu)).toBe(expectedAdress)
  })
  it('should increment program counter by 2', () => {
    const cpu = new CPU()
    const currentCounter = cpu.programCounter.current
    absoluteX.derefAddress(cpu)
    expect(cpu.programCounter.current).toBe(currentCounter + 2)
  })
})
