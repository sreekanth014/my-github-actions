import { plusTwo } from './plusTwo'

describe('testing PlusTwo function', () => {
  test('should multiply by two the value', () => {
    const result = plusTwo({ value: 5 })
    expect(result).toBe(8)
  })
})