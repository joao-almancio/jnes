const instructions_A = [['ADC'], ['AND'], ['ASL']]
const instructions_B = [['BCC'], ['BCS'], ['BEQ'], ['BIT'], ['BMI'], ['BNE'], ['BPL'], ['BRK'], ['BVC'], ['BVS']]
const instructions_C = [['CLC'], ['CLD'], ['CLI'], ['CLV'], ['CMP'], ['CPX'], ['CPY']]
const instructions_D = [['DEC'], ['DEX'], ['DEY']]
const instructions_E = [['EOR']]
const instructions_I = [['INC'], ['INX'], ['INY']]
const instructions_J = [['JMP'], ['JSR']]
const instructions_L = [['LDA'], ['LDX'], ['LDY'], ['LSR']]
const instructions_N = [['NOP']]
const instructions_O = [['ORA']]
const instructions_P = [['PHA'], ['PHP'], ['PLA'], ['PLP']]
const instructions_R = [['ROL'], ['ROR'], ['RTI'], ['RTS']]
const instructions_S = [['SBC'], ['SEC'], ['SED'], ['SEI'], ['STA'], ['STX'], ['STY']]
const instructions_T = [['TAX'], ['TAY'], ['TSX'], ['TXA'], ['TXS'], ['TYA']]

const instructions = [
  ...instructions_A,
  ...instructions_B,
  ...instructions_C,
  ...instructions_D,
  ...instructions_E,
  ...instructions_I,
  ...instructions_J,
  ...instructions_L,
  ...instructions_N,
  ...instructions_O,
  ...instructions_P,
  ...instructions_R,
  ...instructions_S,
  ...instructions_T,
]

describe('Instructions', () => {
  it('Should contain 56 instructions', () => {
    expect(instructions.length).toBe(56)
  })
  it.each(instructions)('should contain %s instruction', async (instructionName) => {
    const instructionModule = await import(`./${instructionName}/${instructionName}`)
    expect(instructionModule[instructionName].label).toBe(instructionName)
  })
})
