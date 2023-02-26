import { AddressingMode } from '@models/AddressingMode.model'

export const absoluteX = new AddressingMode({
  name: 'absolute-x',
  derefAddress(cpu) {
    const base = cpu.memoryManager.readU16(cpu.programCounter.current)
    const address = base + cpu.registerX.read()
    cpu.programCounter.next(2)
    return address
  },
})
