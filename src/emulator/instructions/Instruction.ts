import { CPU } from '@emulator/cpu'
import { Mode, useAddressing } from '@emulator/useAddress/useAddressing'

type InstructionRunner = (cpu: CPU) => void

type InstructionMode = {
  code: number
  label: string
  mode: Mode
  run: InstructionRunner
}

type InstructionProps = {
  label: string
  core: (cpu: CPU, address: number) => void
  runMode: { code: number; mode: Mode }[]
}

type CreateInstructionModeProps = {
  code: number
  mode: Mode
  label: string
  core: (cpu: CPU, address: number) => void
}
const createInstructionMode = ({ code, mode, label, core }: CreateInstructionModeProps) => {
  return {
    code,
    label: label,
    mode,
    run: (cpu: CPU) => {
      const address = useAddressing(cpu, mode)
      core(cpu, address)
    },
  }
}

export class Instruction {
  label
  runMode
  constructor(props: InstructionProps) {
    this.label = props.label
    this.runMode = props.runMode.reduce((output, currentMode) => {
      const runMode: Record<number, InstructionMode> = {
        ...output,
        [currentMode.code]: createInstructionMode({
          code: currentMode.code,
          label: props.label,
          mode: currentMode.mode,
          core: props.core,
        }),
      }
      return runMode
    }, {} as Record<number, InstructionMode>)
  }
}
