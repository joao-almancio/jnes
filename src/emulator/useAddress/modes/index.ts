import { absolute } from './absolute/absolute'
import { absoluteX } from './absoluteX/absoluteX'
import { absoluteY } from './absoluteY/absoluteY'
import { immediate } from './immediate/immediate'
import { implied } from './implied/implied'
import { indirectX } from './indirectX/indirectX'
import { indirectY } from './indirectY/indirectY'
import { zeroPage } from './zeroPage/zeroPage'
import { zeroPageX } from './zeroPageX/zeroPageX'
import { zeroPageY } from './zeroPageY/zeroPageY'

export const addressingMode = {
  [implied.name]: implied,
  [absolute.name]: absolute,
  [absoluteX.name]: absoluteX,
  [absoluteY.name]: absoluteY,
  [immediate.name]: immediate,
  [indirectX.name]: indirectX,
  [indirectY.name]: indirectY,
  [zeroPage.name]: zeroPage,
  [zeroPageX.name]: zeroPageX,
  [zeroPageY.name]: zeroPageY,
} as const
