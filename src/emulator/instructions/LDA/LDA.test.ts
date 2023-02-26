import { Mode } from '@emulator/useAddress/useAddressing'
import { LDA } from './LDA'
import { CPU } from '@emulator/cpu'

type Case = { code: number; hex: string; mode: Mode }
const cases: Case[] = [
  { code: 0xa9, hex: '0xa9', mode: 'immediate' },
  { code: 0xa5, hex: '0xa5', mode: 'zero-page' },
  { code: 0xb5, hex: '0xb5', mode: 'zero-page-x' },
  { code: 0xad, hex: '0xad', mode: 'absolute' },
  { code: 0xbd, hex: '0xbd', mode: 'absolute-x' },
  { code: 0xb9, hex: '0xb9', mode: 'absolute-y' },
  { code: 0xa1, hex: '0xa1', mode: 'indirect-x' },
  { code: 0xb1, hex: '0xb1', mode: 'indirect-y' },
]

describe('LDA', () => {
  it('Should contain propper label', () => {
    expect(LDA.label).toBe('LDA')
  })

  it.each(cases)(`should contain version $hex in $mode addressing mode`, ({ code, mode }) => {
    expect(LDA.runMode[code].mode).toBe(mode)
  })

  describe('When positive value', () => {
    const cpu = new CPU()
    const program = new Uint8Array([0xa9, 0x05, 0x00])
    cpu.loadAndRun(program)
    it('Should update registerA', () => {
      expect(cpu.registerA.read()).toBe(0x05)
    })

    it('Should set Z flag to 0', () => {
      expect(cpu.status.getFlag('Z')).toBe(false)
    })

    it('Should set N flag to 0', () => {
      expect(cpu.status.getFlag('N')).toBe(false)
    })
  })

  describe('When negative value', () => {
    const cpu = new CPU()
    const program = new Uint8Array([0xa9, 0xfb, 0x00])
    cpu.loadAndRun(program)
    it('Should update registerA', () => {
      expect(cpu.registerA.read()).toBe(0xfb)
    })

    it('Should set Z flag to 0', () => {
      expect(cpu.status.getFlag('Z')).toBe(false)
    })

    it('Should set N flag to 1', () => {
      expect(cpu.status.getFlag('N')).toBe(true)
    })
  })

  describe('When zero value', () => {
    const cpu = new CPU()
    const program = new Uint8Array([0xa9, 0b0, 0x00])
    cpu.loadAndRun(program)
    it('Should update registerA', () => {
      expect(cpu.registerA.read()).toBe(0)
    })

    it('Should set Z flag to 1', () => {
      expect(cpu.status.getFlag('Z')).toBe(true)
    })

    it('Should set N flag to 0', () => {
      expect(cpu.status.getFlag('N')).toBe(false)
    })
  })
})
