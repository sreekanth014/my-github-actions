interface SumProps {
  value: number
}

export function plusTwo({value}: SumProps): number {
  return (value * 2)
}
