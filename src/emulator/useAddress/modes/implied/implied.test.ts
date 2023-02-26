import { CPU } from '@emulator/cpu'
import { implied } from './implied'

describe('zeroPage', () => {
  it('should have propper name', () => {
    expect(implied.name).toBe('implied')
  })
  it('should return 0 as address', () => {
    const cpu = new CPU()
    expect(implied.derefAddress(cpu)).toBe(0)
  })
  it('should increment program counter by 0', () => {
    const cpu = new CPU()
    const currentCounter = cpu.programCounter.current
    implied.derefAddress(cpu)
    expect(cpu.programCounter.current).toBe(currentCounter)
  })
})
