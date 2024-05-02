"use client"
import React, { useRef, useState } from "react";
import { MapContainer, Marker, TileLayer } from "react-leaflet";

const Map: React.FC = () => {
    const [center, setCenter] = useState({ lat: 14.192048, lng: 121.131180 });
    const ZOOM_LEVEL = 9;
    const mapRef = useRef();
    
    return (
        <div className="w-400 h-200">
            <MapContainer
            center={center}
            zoom={ZOOM_LEVEL}
            scrollWheelZoom={true}
            style={{
              height: "100%",
              width: "100%",
              zIndex: 30,
            }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

          </MapContainer>
        </div>
    );
};

export default Map;
