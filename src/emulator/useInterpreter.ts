import { CPU } from './cpu'
import { instructions } from './instructions'

export const useInterpreter = (cpu: CPU) => {
  return () => {
    const readInstruction = () => {
      const code = cpu.memoryManager.readU8(cpu.programCounter.current)
      cpu.programCounter.next()
      return code
    }
    cpu.status.setFlag('B', false)

    while (!cpu.status.getFlag('B')) {
      const instructionCode = readInstruction()

      try {
        instructions[instructionCode].run(cpu)
      } catch (error) {
        console.error(`Unknown operation ${instructionCode}`)
        throw error
      }
    }
  }
}
