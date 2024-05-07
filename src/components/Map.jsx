import React, { useEffect, useState } from 'react'
import { MapContainer, TileLayer, Marker } from 'react-leaflet'

export default function Map({ apiData }) {
  const [position, setPosition] = useState([0, 0])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (apiData && apiData.lat !== undefined && apiData.lon !== undefined) {
      setPosition([apiData.lat, apiData.lon])
      setLoading(false)
    } else {
      setLoading(true)
    }
  }, [apiData])

  return (
    <div className="">
      {loading ? (
        <div>Loading...</div>
      ) : (
        <MapContainer
          center={position}
          zoom={7}
          scrollWheelZoom={false}
          className="map-container z-0 min-h-[307px] h-[100vh] max-h-[677px]"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position} />
        </MapContainer>
      )}
    </div>
  )
}
