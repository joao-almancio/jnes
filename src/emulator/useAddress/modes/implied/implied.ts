import { AddressingMode } from '@models/AddressingMode.model'

export const implied = new AddressingMode({
  name: 'implied',
  derefAddress() {
    return 0
  },
})
