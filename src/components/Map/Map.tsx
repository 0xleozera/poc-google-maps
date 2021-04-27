import { withGoogleMap, withScriptjs } from 'react-google-maps'

import { MapPreview, MapPreviewProps } from './components/MapPreview'

const GoogleMaps = withScriptjs(withGoogleMap(MapPreview))

export const Map = (props: MapPreviewProps) => (
  <GoogleMaps
    {...props}
    googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_API_KEY}`}
    loadingElement={<div style={{ height: '100%' }} />}
    containerElement={<div style={{ height: '800px' }} />}
    mapElement={<div style={{ height: '100%' }} />}
  />
)
