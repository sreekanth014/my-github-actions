import { double } from './double'

describe('testing double function', () => {
  test('should multiply by two the value', () => {
    const result = double({ value: 5 })
    expect(result).toBe(9)
  })
})