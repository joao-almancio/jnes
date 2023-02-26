import { CPU } from '@emulator/cpu'
import { BRK } from './BRK'

describe('BRK', () => {
  it('Should containt propper label', () => {
    expect(BRK.label).toBe('BRK')
  })

  it('should contain version 0x00 in implied addressing mode', () => {
    expect(BRK.runMode[0x00].mode).toBe('implied')
  })

  it('Should set break flag to 1', () => {
    const cpu = new CPU()
    const program = new Uint8Array([0x00])

    expect(cpu.status.getFlag('B')).not.toBe(true)
    cpu.loadAndRun(program)
    expect(cpu.status.getFlag('B')).toBe(true)
  })
})
