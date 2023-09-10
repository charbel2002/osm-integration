import { MapContainer, TileLayer, Marker, Popup  } from 'react-leaflet'

export default function Map()
{

    const classname = "w-full h-72 lg:h-72"

    return (

        <MapContainer className={classname} center={[6.3699,2.3906]} zoom={13} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[6.3699,2.3906]}>
            <Popup>
              Hey from unstable234__
            </Popup>
          </Marker>
          <Marker position={[6.3599,2.3856]}>
            <Popup>
              Hey from unstable234__
            </Popup>
          </Marker>
          <Marker position={[6.3609,2.3906]}>
            <Popup>
              Hey from unstable234__
            </Popup>
          </Marker>
        </MapContainer>

    )

}