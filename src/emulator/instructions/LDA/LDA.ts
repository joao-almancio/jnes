import { CPU } from '@emulator/cpu'
import { Instruction } from '../Instruction'

export const LDA = new Instruction({
  core: (cpu: CPU, address: number) => {
    const param = cpu.memoryManager.readU8(address)
    cpu.registerA.write(param)
    cpu.status.setFlag('Z', cpu.registerA.isZero())
    cpu.status.setFlag('N', cpu.registerA.mostSignificantBit())
  },
  label: 'LDA',
  runMode: [
    { code: 0xa9, mode: 'immediate' },
    { code: 0xa5, mode: 'zero-page' },
    { code: 0xb5, mode: 'zero-page-x' },
    { code: 0xad, mode: 'absolute' },
    { code: 0xbd, mode: 'absolute-x' },
    { code: 0xb9, mode: 'absolute-y' },
    { code: 0xa1, mode: 'indirect-x' },
    { code: 0xb1, mode: 'indirect-y' },
  ],
})
