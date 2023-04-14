interface DoubleProps {
  value: number
}

export function double({value}: DoubleProps): number {
  return (value * 2)
}
