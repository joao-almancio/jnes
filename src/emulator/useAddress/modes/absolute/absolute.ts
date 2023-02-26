import { AddressingMode } from '@models/AddressingMode.model'

export const absolute = new AddressingMode({
  name: 'absolute',
  derefAddress(cpu) {
    const address = cpu.memoryManager.readU16(cpu.programCounter.current)
    cpu.programCounter.next(2)
    return address
  },
})
