import { CPU } from '@emulator/cpu'
import { absoluteY } from './absoluteY'

describe('absoluteY', () => {
  it('should have propper name', () => {
    expect(absoluteY.name).toBe('absolute-y')
  })
  it('should return propper 2 bytes address', () => {
    const cpu = new CPU()
    const x = 0x01
    const counter = 0xaaaa
    const pointer = 0xbbb0
    const expectedAdress = pointer + x
    cpu.registerY.write(x)
    cpu.programCounter.to(counter)
    cpu.memoryManager.writeU16(counter, pointer)
    expect(absoluteY.derefAddress(cpu)).toBe(expectedAdress)
  })
  it('should increment program counter by 2', () => {
    const cpu = new CPU()
    const currentCounter = cpu.programCounter.current
    absoluteY.derefAddress(cpu)
    expect(cpu.programCounter.current).toBe(currentCounter + 2)
  })
})
