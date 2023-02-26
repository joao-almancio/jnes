import { AddressingMode } from '@models/AddressingMode.model'

export const indirectY = new AddressingMode({
  name: 'indirect-y',
  derefAddress(cpu) {
    const base = cpu.memoryManager.readU8(cpu.programCounter.current)
    const pointer = cpu.memoryManager.readU16(base)
    const address = pointer + cpu.registerY.read()
    cpu.programCounter.next()
    return address
  },
})
