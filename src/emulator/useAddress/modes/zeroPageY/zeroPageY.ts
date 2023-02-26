import { AddressingMode } from '@models/AddressingMode.model'

export const zeroPageY = new AddressingMode({
  name: 'zero-page-y',
  derefAddress(cpu) {
    const position = cpu.memoryManager.readU8(cpu.programCounter.current)
    const address = position + cpu.registerY.read()
    cpu.programCounter.next()
    return address
  },
})
