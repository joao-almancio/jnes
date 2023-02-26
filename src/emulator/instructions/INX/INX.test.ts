import { CPU } from '@emulator/cpu'
import { INX } from './INX'

describe('INX', () => {
  it('Should have propper label', () => {
    expect(INX.label).toBe('INX')
  })
  it(`should contain version 0xe8 in implied addressing mode`, () => {
    expect(INX.runMode[0xe8].mode).toBe('implied')
  })
  it('Should increment value in registerX', () => {
    const cpu = new CPU()
    const program1 = new Uint8Array([0xe8, 0x00])
    const program2 = new Uint8Array([0xe8, 0xe8, 0x00])
    cpu.loadAndRun(program1)
    expect(cpu.registerX.read()).toBe(0x1)
    cpu.loadAndRun(program2)
    expect(cpu.registerX.read()).toBe(0x2)
  })
})
