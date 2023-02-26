import { AddressingMode } from '@models/AddressingMode.model'

export const absoluteY = new AddressingMode({
  name: 'absolute-y',
  derefAddress(cpu) {
    const base = cpu.memoryManager.readU16(cpu.programCounter.current)
    const address = base + cpu.registerY.read()
    cpu.programCounter.next(2)
    return address
  },
})
