import { City, ComponentOptions, PlacePoint } from '../../types/types';
import { MapMarkerCurrent, MapMarkerDefault, MapType } from '../../const';
import { useRef, useEffect } from 'react';
import useMap from '../../hooks/use-map';
import { Icon, Marker, layerGroup } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useAppSelector } from '../../hooks/store';
import { placesSelectors } from '../../store/places-slice/places-slice';

type MapProps = {
  city: City;
  points: PlacePoint[];
  viewType: ComponentOptions;
};

const defaultCustomIcon = new Icon(MapMarkerDefault);
const currentCustomIcon = new Icon(MapMarkerCurrent);

export default function Map({ city, points, viewType }: MapProps): JSX.Element {
  const activePlaceId = useAppSelector(placesSelectors.activePlaceId);
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);
  const hashMarker = useRef<Record<string, Marker>>({});

  useEffect(() => {
    if (map) {
      map.flyTo(
        [city.location.latitude, city.location.longitude],
        city.location.zoom,
        { duration: 1.2 }
      );
    }
  }, [map, city]);

  useEffect(() => {
    if (map && points) {
      const markerDefaultLayer = layerGroup().addTo(map);
      points.forEach((point, index) => {
        hashMarker.current[point.id] = new Marker({
          lat: point.location.latitude,
          lng: point.location.longitude,
        });
        hashMarker.current[point.id]
          .setIcon(
            viewType === MapType.City || index > 0
              ? defaultCustomIcon
              : currentCustomIcon
          )
          .addTo(markerDefaultLayer);
      });
      return () => {
        map.removeLayer(markerDefaultLayer);
      };
    }
  }, [map, city, points, viewType]);

  useEffect(() => {
    if (
      map &&
      viewType === MapType.City &&
      activePlaceId &&
      hashMarker.current[activePlaceId]
    ) {
      const marker = hashMarker.current[activePlaceId];
      marker.setIcon(currentCustomIcon);
      return () => {
        marker.setIcon(defaultCustomIcon);
      };
    }
  }, [map, activePlaceId, viewType]);

  return (
    <section className={`${viewType.classPrefix}__map map`} ref={mapRef} />
  );
}
