import { CPU } from '@emulator/cpu'

export class AddressingMode<N extends string> {
  readonly name: N
  derefAddress: (cpu: CPU) => number
  constructor(addressingMode: { name: N; derefAddress: (cpu: CPU) => number }) {
    this.name = addressingMode.name
    this.derefAddress = addressingMode.derefAddress
  }
}
