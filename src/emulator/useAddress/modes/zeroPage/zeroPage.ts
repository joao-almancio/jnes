import { AddressingMode } from '@models/AddressingMode.model'

export const zeroPage = new AddressingMode({
  name: 'zero-page',
  derefAddress(cpu) {
    const address = cpu.memoryManager.readU8(cpu.programCounter.current)
    cpu.programCounter.next()
    return address
  },
})
