import { AddressingMode } from '@models/AddressingMode.model'

export const indirectX = new AddressingMode({
  name: 'indirect-x',
  derefAddress(cpu) {
    const base = cpu.memoryManager.readU8(cpu.programCounter.current)
    const pointer = base + cpu.registerX.read()
    const address = cpu.memoryManager.readU16(pointer)
    cpu.programCounter.next()
    return address
  },
})
