import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import markerIconPng from 'leaflet/dist/images/marker-icon.png';
import {Icon} from 'leaflet'
import 'leaflet/dist/leaflet.css';
import './styles/mapView.css'


const MapView = () => {

    const position = [41.5287017, 2.1061721]

    return (
        <MapContainer
            center={position}
            zoom={15}
        >
            <TileLayer 
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={position} icon={new Icon({iconUrl: markerIconPng, iconSize:[25,41], iconAnchor:[12,41]})}>
                <Popup>
                    Constructora
                </Popup>
            </Marker>
        </MapContainer>
    )
}

export default MapView;