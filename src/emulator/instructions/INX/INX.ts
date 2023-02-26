import { Instruction } from '../Instruction'

export const INX = new Instruction({
  core: (cpu) => {
    const currentX = cpu.registerX.read()
    cpu.registerX.write(currentX + 1)
  },
  label: 'INX',
  runMode: [{ code: 0xe8, mode: 'implied' }],
})
