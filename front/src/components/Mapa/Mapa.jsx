//npm install react-leaflet --legacy-peer-deps
//npm install react react-dom leaflet

import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./Mapa.css";
// import L from "leaflet";
// import icon from "leaflet/dist/images/marker-icon.png";
// import iconShadow from "leaflet/dist/images/marker-icon.png";

// let iconUbicacion = new L.icon({
//   iconUrl: icon,
//   iconShadow: iconShadow,
//   iconSize: [20,25],
//   iconAnchor:[20,90],
//   shadowAnchor: [20,90],
//   popupAncho: [-3,-75]
// })


export default function Mapa() {
  return (
    <div id="map-container">
      <MapContainer
        center={[20, 0]}
        zoom={2}
        scrollWheelZoom={false}
        className="mapa"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {/* <Marker position={[43, -3]} icon={iconUbicacion} >
          <Popup>
             USTED ESTA AQUÍ.
          </Popup>
        </Marker> */}
      </MapContainer>
    </div>
  );
}