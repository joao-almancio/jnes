import { LDA } from './LDA/LDA'
import { INX } from './INX/INX'
import { BRK } from './BRK/BRK'

export const instructions = {
  ...LDA.runMode,
  ...INX.runMode,
  ...BRK.runMode,
}
