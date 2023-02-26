import { Mode } from '../useAddressing'
import { addressingMode } from './index'

const cases: [Mode][] = [
  ['absolute'],
  ['absolute-x'],
  ['absolute-y'],
  ['immediate'],
  ['implied'],
  ['indirect-x'],
  ['indirect-y'],
  ['zero-page'],
  ['zero-page-x'],
  ['zero-page-y'],
]

describe('Addressing modes', () => {
  it.each(cases)('should containt %s addressing mode', (mode) => {
    Object.keys(addressingMode)
    expect(Object.keys(addressingMode)).toContain(mode)
  })
})
