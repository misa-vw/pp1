import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { LatLngExpression } from "leaflet";
import "leaflet/dist/leaflet.css";

import L from 'leaflet';
// Use CDN URLs for marker icons
L.Icon.Default.mergeOptions({
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});


const MapComponent = () => {
  const position: LatLngExpression = [51.505, -0.09]; // Default center coordinates

  // List of adopted trees with their coordinates and details
  const adoptedTrees = [
    { id: 1, name: "Cedar Tree", location: [34.020882, -6.841650], description: "Adopted by Ahmed" }, // Rabat
    { id: 2, name: "Olive Tree", location: [33.573110, -7.589843], description: "Adopted by Fatima" }, // Casablanca
    { id: 3, name: "Almond Tree", location: [35.759465, -5.833954], description: "Adopted by Youssef" }, // Tangier
    { id: 4, name: "Eucalyptus Tree", location: [31.791702, -7.092620], description: "Adopted by Amina" }, // Marrakesh
    { id: 5, name: "Cedar Tree", location: [34.013250, -5.000000], description: "Adopted by Hassan" }, // Fes
    { id: 6, name: "Olive Tree", location: [32.886273, -6.913147], description: "Adopted by Malika" }, // Meknes
    { id: 7, name: "Almond Tree", location: [29.696897, -9.732157], description: "Adopted by Rachid" }, // Agadir
    { id: 8, name: "Eucalyptus Tree", location: [27.150000, -13.200000], description: "Adopted by Salma" }, // Laayoune
    { id: 9, name: "Cedar Tree", location: [30.427755, -9.598107], description: "Adopted by Khalid" }, // Taroudant
    { id: 10, name: "Olive Tree", location: [32.293014, -6.589019], description: "Adopted by Layla" }, // Beni Mellal
  ];

  return (
    <MapContainer center={position} zoom={13} style={{ height: "100vh", width: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {adoptedTrees.map(tree => (
        <Marker key={tree.id} position={tree.location as LatLngExpression}>
          <Popup>
            <strong>{tree.name}</strong>
            <br />
            {tree.description}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapComponent;
