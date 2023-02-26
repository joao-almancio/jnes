import { CPU } from '@emulator/cpu'
import { Mode } from '@emulator/useAddress/useAddressing'

type OperationVersion = { addressingMode: Mode }

type OperationProps = {
  label: string
  run: (cpu: CPU, address: number) => void
  codes: Record<number, OperationVersion>
}

export class Operation {
  readonly code!: number
  readonly label!: string
  run!: (cpu: CPU, mode: Mode) => void

  constructor(props: OperationProps) {
    Object.assign(this, props)
    for (let key in props.codes) {
      this.versions = {
        [key]: () => {
          const address = props.codes
        },
      }
    }
  }
  versions: any
}
