import useOnclickOutside from 'react-cool-onclickoutside'

interface InputAddressWithHookProps {
  ready: boolean
  value: string
  suggestions: {
    status: string
    data: google.maps.places.AutocompletePrediction[]
  }
  setValue(value: string, shouldFetchData?: boolean): void
  clearSuggestions(): void
  init(): void
  handleSelect(
    data: google.maps.places.AutocompletePrediction,
  ): React.MouseEventHandler<HTMLLIElement>
}

export const InputAddressWithHook = (props: InputAddressWithHookProps) => {
  const ref = useOnclickOutside(() => props.clearSuggestions())

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.setValue(event.target.value)
  }

  const renderSuggestions = () => {
    const mappedData = props.suggestions.data.map((suggestion) => {
      const {
        place_id,
        structured_formatting: { main_text, secondary_text },
      } = suggestion

      return (
        <li key={place_id} onClick={props.handleSelect(suggestion)}>
          <strong>{main_text}</strong> <small>{secondary_text}</small>
        </li>
      )
    })

    return mappedData
  }

  return (
    <div ref={ref}>
      <input
        value={props.value}
        onChange={handleInput}
        disabled={!props.ready}
        placeholder="Where are you going?"
      />
      {props.suggestions.status === 'OK' && <ul>{renderSuggestions()}</ul>}
    </div>
  )
}
