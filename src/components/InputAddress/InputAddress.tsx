import GooglePlacesAutocomplete from 'react-google-places-autocomplete'

interface InputAddressProps {
  address: string | null
  onAddressChange(value: string | null): void
}

export const InputAddress = ({
  address,
  onAddressChange,
}: InputAddressProps) => (
  <GooglePlacesAutocomplete
    apiKey={process.env.REACT_APP_GOOGLE_API_KEY}
    apiOptions={{ language: 'pt-BR', region: 'BR' }}
    selectProps={{
      value: address,
      onChange: onAddressChange,
    }}
  />
)
