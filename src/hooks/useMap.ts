import { useState } from 'react'

import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from 'use-places-autocomplete'

export const useMap = () => {
  const places = usePlacesAutocomplete({ debounce: 400 })
  const [coordinates, setCoordinates] = useState<{ lat: number; lng: number }>()

  const handleSelectPlace = ({
    description,
  }: google.maps.places.AutocompletePrediction) => async () => {
    places.setValue(description, false)
    places.clearSuggestions()

    try {
      const geocode = await getGeocode({ address: description })
      const coordinates = await getLatLng(geocode[0])

      console.log('📍 Coordinates: ', coordinates)
      setCoordinates(coordinates)
    } catch (err) {
      console.log('😱 Error: ', err)
    }
  }

  return { coordinates, places, handleSelectPlace }
}
