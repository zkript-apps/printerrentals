"use client"
import React, { useRef } from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "tailwindcss/tailwind.css";
import { Icon } from "leaflet"
import mapMarker from "../../public/mapMarker.png"

const WEB_URL = process.env.WEB_URL || ""

interface MapComponentProps {
  center: { lat: number; lng: number };
  zoom: number;
  markers?: { lat: number; lng: number }[];
}

const mapMarkerUrl: string = mapMarker as unknown as string;

const markerIcon = new Icon({
  iconUrl: `${WEB_URL}/mapMarker.png`,
  iconSize: [35, 35],
  iconAnchor: [18, 18],
  popupAnchor: [-3, -76],
})



const MapComponent: React.FC<MapComponentProps> = ({ center, zoom, markers = [] }) => {
  const mapRef = useRef<L.Map>(null);

  return (
    <div className="w-full h-full">
      <MapContainer
        center={center}
        zoom={zoom}
        scrollWheelZoom={true}
        className="w-full h-full"
        ref={mapRef}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {markers.map((marker, idx) => (
          <Marker key={idx} position={marker} icon={markerIcon}/>
        ))}
      </MapContainer>
    </div>
  );
};

export default MapComponent;
