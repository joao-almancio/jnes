import { Counter } from './Counter'

describe('Counter', () => {
  it('should init with provided initialAddress', () => {
    const counter = new Counter(0x8000)
    expect(counter.current).toBe(0x8000)
  })

  it('should overflow when address is over 0xFFFF', () => {
    const counter = new Counter(0xffff)
    expect(counter.current).toBe(0xffff)
    counter.next(3)
    expect(counter.current).toBe(2)
  })

  it('should go to provided address', () => {
    const counter = new Counter()
    expect(counter.current).toBe(0)
    counter.to(0x8000)
    expect(counter.current).toBe(0x8000)
  })
})
