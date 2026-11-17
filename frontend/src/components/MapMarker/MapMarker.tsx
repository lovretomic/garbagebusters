import { AdvancedMarker } from "@vis.gl/react-google-maps";
import MapPinIcon from "../../assets/icons/map_pin.svg?react";

import c from "./MapMarker.module.scss";
import clsx from "clsx";

type MapMarkerProps = {
  position: {
    lat: number;
    lng: number;
  };
  name: string;
  zoom: number;
};

const ZOOM_THRESHOLD = 15;

const MapMarker = ({ position, name, zoom }: MapMarkerProps) => {
  return (
    <AdvancedMarker position={position}>
      {zoom >= ZOOM_THRESHOLD && (
        <div className={clsx(c.marker, c.pinMarker)}>
          <MapPinIcon className={c.icon} />
          <div className={c.circle} />
          <div className={c.nameContainer}>
            <p className={c.name}>{name}</p>
          </div>
        </div>
      )}
      {zoom < ZOOM_THRESHOLD && <div className={clsx(c.marker, c.dotMarker)} />}
    </AdvancedMarker>
  );
};

export default MapMarker;
