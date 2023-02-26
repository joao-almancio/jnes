import { CPU } from '@emulator/cpu'
import { zeroPage } from './zeroPage'

describe('zeroPage', () => {
  it('should have propper name', () => {
    expect(zeroPage.name).toBe('zero-page')
  })
  it('should return one byte address', () => {
    const cpu = new CPU()
    const counterValue = 0xaa
    const expectedAddress = 0xbb
    cpu.memoryManager.writeU8(counterValue, expectedAddress)
    cpu.programCounter.to(counterValue)
    expect(zeroPage.derefAddress(cpu)).toBe(expectedAddress)
  })
  it('should increment program counter by 1', () => {
    const cpu = new CPU()
    const currentCounter = cpu.programCounter.current
    zeroPage.derefAddress(cpu)
    expect(cpu.programCounter.current).toBe(currentCounter + 1)
  })
})
