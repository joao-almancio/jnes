import { Instruction } from '../Instruction'

export const BRK = new Instruction({
  core(cpu) {
    cpu.status.setFlag('B', true)
  },
  label: 'BRK',
  runMode: [{ code: 0x00, mode: 'implied' }],
})
