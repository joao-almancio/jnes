import { AddressingMode } from '@models/AddressingMode.model'

export const immediate = new AddressingMode({
  name: 'immediate',
  derefAddress(cpu) {
    const address = cpu.programCounter.current
    cpu.programCounter.next()
    return address
  },
})
