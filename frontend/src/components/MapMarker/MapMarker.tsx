import { AdvancedMarker } from "@vis.gl/react-google-maps";
import MapPinIcon from "../../assets/icons/map_pin.svg?react";

import c from "./MapMarker.module.scss";

type MapMarkerProps = {
  position: {
    lat: number;
    lng: number;
  };
  name?: string;
  zoom: number;
};

const MapMarker = ({ position, name, zoom }: MapMarkerProps) => {
  return (
    <AdvancedMarker position={position}>
      <div className={c.marker}>
        <MapPinIcon className={c.icon} />
        <div className={c.circle} />
        {zoom >= 10 && name && <p className={c.name}>{name}</p>}
      </div>
    </AdvancedMarker>
  );
};

export default MapMarker;
