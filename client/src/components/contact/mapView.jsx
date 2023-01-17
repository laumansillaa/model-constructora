import { useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import leaflet, { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";
import "./styles/mapView.css";

const icon = L.icon({
  iconSize: [25, 41],
  iconAnchor: [10, 41],
  popupAnchor: [2, -40],
  iconUrl: "https://unpkg.com/leaflet@1.6/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.6/dist/images/marker-shadow.png",
});

const MapView = () => {
  const position = [-34.6037389, -58.3815704];
  const [coord, setCoord] = useState(["", ""]);

  var theMarker = {};

  function MyMarker({}) {
    const map = useMapEvents({
      click: (e) => {
        const { lat, lng } = e.latlng;
        console.log("LAT", lat, lng);
        console.log("LEAFLET", leaflet);
        if (theMarker !== undefined) {
          map.removeLayer(theMarker);
        }
        theMarker = leaflet.marker([lat, lng], { icon }).addTo(map);
        // saveMarkers([lat, lng]);
      },
    });

    return null;
  }

  return (
    <MapContainer center={position} zoom={15}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {/* <Marker
        position={position}
        icon={
          new Icon({
            iconUrl: markerIconPng,
            iconSize: [25, 41],
            iconAnchor: [12, 41],
          })
        }
        onClick={(e) => {
          handleClickMap(e);
        }}
      >
    </Marker> */}
      <MyMarker>{/* <Popup>Constructora</Popup> */}</MyMarker>
    </MapContainer>
  );
};

export default MapView;
