import { useState } from 'react'

import { useMap } from './hooks/useMap'
import { InputAddressWithHook, InputRadius, Map } from './components'

const App = () => {
  const { coordinates, places, handleSelectPlace } = useMap()
  const [radius, setRadius] = useState(0)

  return (
    <>
      <InputAddressWithHook {...places} handleSelect={handleSelectPlace} />
      <InputRadius radius={radius} onRadiusChange={setRadius} />
      <Map
        center={{ lat: -14.24, lng: -53.18 }}
        marker={coordinates}
        radius={radius * 1000}
      />
    </>
  )
}

export default App
