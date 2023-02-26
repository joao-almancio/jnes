import { CPU } from '@emulator/cpu'
import { absolute } from './absolute'

describe('absolute', () => {
  it('should have propper name', () => {
    expect(absolute.name).toBe('absolute')
  })
  it('should return 2 bytes address', () => {
    const cpu = new CPU()
    const counterValue = 0xaaaa
    const expectedAddress = 0xbbbb
    cpu.programCounter.to(counterValue)
    cpu.memoryManager.writeU16(counterValue, expectedAddress)
    expect(absolute.derefAddress(cpu)).toBe(expectedAddress)
  })
  it('should increment program counter by 2', () => {
    const cpu = new CPU()
    const currentCounter = cpu.programCounter.current
    absolute.derefAddress(cpu)
    expect(cpu.programCounter.current).toBe(currentCounter + 2)
  })
})
