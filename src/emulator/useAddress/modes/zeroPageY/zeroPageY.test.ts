import { CPU } from '@emulator/cpu'
import { zeroPageY } from './zeroPageY'

describe('zeroPageY', () => {
  it('should have propper name', () => {
    expect(zeroPageY.name).toBe('zero-page-y')
  })

  it('should return propper 1 byte address', () => {
    const cpu = new CPU()
    const y = 0x01
    const counter = 0xa0
    const pointer = 0xb0
    const expectedAdress = pointer + y
    cpu.programCounter.to(counter)
    cpu.memoryManager.writeU8(counter, pointer)
    cpu.registerY.write(y)
    expect(zeroPageY.derefAddress(cpu)).toBe(expectedAdress)
  })
  it('should increment program counter by 1', () => {
    const cpu = new CPU()
    const currentCounter = cpu.programCounter.current
    zeroPageY.derefAddress(cpu)
    expect(cpu.programCounter.current).toBe(currentCounter + 1)
  })
})
