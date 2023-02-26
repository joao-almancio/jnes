import { CPU } from '@emulator/cpu'
import { addressingMode } from './modes'

export type Mode = keyof typeof addressingMode

export const useAddressing = (cpu: CPU, mode: Mode) => {
  return addressingMode[mode].derefAddress(cpu)
}
