interface InputRadiusProps {
  radius: number
  onRadiusChange(value: number): void
}

export const InputRadius = ({ radius, onRadiusChange }: InputRadiusProps) => {
  const handleRadiusChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const currentRadius = parseInt(event.target.value)
    onRadiusChange(currentRadius)
  }

  return (
    <input
      type="range"
      min={5}
      max={65}
      value={radius}
      onChange={handleRadiusChange}
    />
  )
}
