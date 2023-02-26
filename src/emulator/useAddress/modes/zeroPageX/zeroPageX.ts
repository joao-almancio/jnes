import { AddressingMode } from '@models/AddressingMode.model'

export const zeroPageX = new AddressingMode({
  name: 'zero-page-x',
  derefAddress(cpu) {
    const position = cpu.memoryManager.readU8(cpu.programCounter.current)
    const address = position + cpu.registerX.read()
    cpu.programCounter.next()
    return address
  },
})
