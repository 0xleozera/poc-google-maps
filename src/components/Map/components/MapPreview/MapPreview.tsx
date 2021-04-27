import { GoogleMap, Marker, Circle } from 'react-google-maps'

export interface MapPreviewProps {
  zoom?: number
  radius?: number
  marker?: {
    lat: number
    lng: number
  }
  center: {
    lat: number
    lng: number
  }
}

export const MapPreview = ({
  zoom = 12,
  center,
  marker,
  radius,
}: MapPreviewProps) => (
  <GoogleMap defaultZoom={zoom} defaultCenter={center}>
    {marker && <Marker position={marker} />}
    {radius && (
      <Circle
        defaultCenter={marker}
        radius={radius}
        options={{
          strokeColor: '#4881f2',
          strokeOpacity: 0.7,
          fillColor: '#4881f2',
          fillOpacity: 0.5,
        }}
      />
    )}
  </GoogleMap>
)
