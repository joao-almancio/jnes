import { Register } from './Register'

describe('Register', () => {
  it('should overflow if register value is over 0xFF', () => {
    const register = new Register()
    register.write(0x100)
    expect(register.read()).toBe(0x00)
    register.write(0x101)
    expect(register.read()).toBe(0x01)
  })

  it('should set flag isZero if register value is equal to zero', () => {
    const register = new Register()
    register.write(1)
    expect(register.isZero()).toBe(false)
    register.write(0)
    expect(register.isZero()).toBe(true)
  })

  it('should set flag mostSignificantBit if value most significant bit is one', () => {
    const register = new Register()
    register.write(0b1111_1111)
    expect(register.mostSignificantBit()).toBe(true)
    register.write(0b0111_1111)
    expect(register.mostSignificantBit()).toBe(false)
  })
})
