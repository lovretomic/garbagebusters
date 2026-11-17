import { AdvancedMarker, Map } from "@vis.gl/react-google-maps";
import FlowerOrangeIcon from "../../assets/icons/flower_orange.svg";

type Location = {
  lat: number;
  lng: number;
  name?: string;
};

const locations: Location[] = [
  { lat: 45.8144, lng: 15.978, name: "Zagreb" },
  { lat: 44.1194, lng: 15.2314, name: "Mostar" },
  { lat: 43.5081, lng: 16.4402, name: "Split" },
  { lat: 42.6507, lng: 18.0944, name: "Dubrovnik" },
];

const CitizenMapPage = () => {
  return (
    <Map
      style={{ width: "100vw", height: "100%" }}
      defaultCenter={{ lat: 44.5325, lng: 16.7768 }}
      defaultZoom={7}
      gestureHandling="greedy"
      disableDefaultUI
      mapId="6ef6bf669e1fc32d2bf34c06"
    >
      {" "}
      {locations.map((location, index) => (
        <AdvancedMarker key={index} position={{ lat: location.lat, lng: location.lng }}>
          <>
            <img src={FlowerOrangeIcon} alt="Marker" width="30" height="30" />
            <p>{location.name}</p>
          </>
        </AdvancedMarker>
      ))}
    </Map>
  );
};

export default CitizenMapPage;
