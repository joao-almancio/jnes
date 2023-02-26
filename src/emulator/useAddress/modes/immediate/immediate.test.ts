import { CPU } from '@emulator/cpu'
import { immediate } from './immediate'

describe('immediate', () => {
  it('should have propper name', () => {
    expect(immediate.name).toBe('immediate')
  })
  it('should return address equal to the counter value', () => {
    const cpu = new CPU()
    const expectedAddress = 0xaa
    cpu.programCounter.to(expectedAddress)
    expect(immediate.derefAddress(cpu)).toBe(expectedAddress)
  })
  it('should increment program counter by 1', () => {
    const cpu = new CPU()
    const currentCounter = cpu.programCounter.current
    immediate.derefAddress(cpu)
    expect(cpu.programCounter.current).toBe(currentCounter + 1)
  })
})
