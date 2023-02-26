import { useInterpreter } from './useInterpreter'
import { MemoryManager } from './MemoryManager/MemoryManager'
import { Register } from './Register/Register'
import { Counter } from './Counter/Counter'
import { Status } from './Status'

export class CPU {
  readonly registerA = new Register()
  readonly registerX = new Register()
  readonly registerY = new Register()

  readonly programCounter = new Counter()

  readonly status = new Status()

  readonly memoryManager = new MemoryManager()

  interpret = useInterpreter(this)

  constructor() {}

  load(program: Uint8Array) {
    this.memoryManager.writeU16(0xfffc, 0x8000)
    this.memoryManager.loadProgram(program)
  }

  loadAndRun(program: Uint8Array) {
    this.load(program)
    this.reset()
    this.interpret()
  }

  reset() {
    this.registerA.write(0)
    this.registerX.write(0)
    this.status.reset()
    const initialCounterAddress = this.memoryManager.readU16(0xfffc)
    this.programCounter.to(initialCounterAddress)
  }
}
