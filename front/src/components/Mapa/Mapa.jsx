//npm install react-leaflet --legacy-peer-deps
//npm install react react-dom leaflet

import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./Mapa.css";
// import L from "leaflet";
// import icon from "leaflet/dist/images/marker-icon.png";
// import iconShadow from "leaflet/dist/images/marker-icon.png";
// ICONO DEL MARCADOR Y TAMAÑO
// let iconUbicacion = new L.icon({
//     iconUrl: icon,
//     iconShadow: iconShadow,
//     iconSize: [30,45],
//     iconAnchor:[15,80],
//     shadowAnchor:[15,80],
//     popupAnchor:[-3,-76]
// })

export default function Mapa() {
  return (
    <div>
      <MapContainer
        center={[0, 0]}
        zoom={2}
        scrollWheelZoom={false}
        className="mapa"
      >
        <TileLayer
        //   attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {/* COORDENADAS Y MENSAJA DEL MARCADOR */}
        {/* <Marker position={[43.26271, -2.92528]} icon={iconUbicacion} >
          <Popup>
             USTED ESTA AQUÍ.
          </Popup>
        </Marker> */}
      </MapContainer>
    </div>
  );
}