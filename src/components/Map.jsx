import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'

export default function Map({ apiData }) {
  const mapStyles = {
    height: '100vh',
    width: '100%',
  }

  const defaultCenter = {
    lat: apiData?.location.lat,
    lng: apiData?.location.lng,
  }

  return (
    <LoadScript googleMapsApiKey="AIzaSyA3-wL6CeIHx-mJgvL_1E1okULl4alJrqU">
      <GoogleMap mapContainerStyle={mapStyles} zoom={50} center={defaultCenter}>
        <Marker position={defaultCenter} />
      </GoogleMap>
    </LoadScript>
  )
}
