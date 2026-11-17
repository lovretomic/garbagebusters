import { Map } from "@vis.gl/react-google-maps";
import MapMarker from "../../components/MapMarker";
import { useState } from "react";

type Location = {
  lat: number;
  lng: number;
  name?: string;
};

const locations: Location[] = [
  { lat: 45.8144, lng: 15.978, name: "Zagreb" },
  { lat: 44.1194, lng: 15.2314, name: "Zadar" },
  { lat: 43.5081, lng: 16.4402, name: "Split" },
  { lat: 42.6507, lng: 18.0944, name: "Dubrovnik" },
];

const CitizenMapPage = () => {
  const [zoom, setZoom] = useState(7);

  return (
    <Map
      style={{ width: "100vw", height: "100%" }}
      defaultCenter={{ lat: 44.5325, lng: 16.7768 }}
      defaultZoom={7}
      gestureHandling="greedy"
      disableDefaultUI
      mapId="6ef6bf669e1fc32d2bf34c06"
      onZoomChanged={(event) => {
        setZoom(event.detail.zoom);
      }}
    >
      {locations.map((location, index) => (
        <MapMarker
          key={index}
          position={{ lat: location.lat, lng: location.lng }}
          name={location.name}
          zoom={zoom}
        />
      ))}
    </Map>
  );
};

export default CitizenMapPage;
