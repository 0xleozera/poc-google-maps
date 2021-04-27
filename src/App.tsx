import { useState } from 'react'

import { InputAddress, InputRadius, Map } from './components'

const App = () => {
  const [address, setAddress] = useState<string | null>(null)
  const [radius, setRadius] = useState(5)

  return (
    <>
      <InputAddress address={address} onAddressChange={setAddress} />
      <InputRadius radius={radius} onRadiusChange={setRadius} />
      <Map center={{ lat: 40.64, lng: -73.96 }} />
    </>
  )
}

export default App
