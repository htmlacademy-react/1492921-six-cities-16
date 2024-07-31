import { City, Place, ComponentOptions } from '../../types/types';
import { URL_MARKER_DEFAULT, URL_MARKER_CURRENT } from '../../const';
import { useRef, useEffect } from 'react';
import useMap from '../../hooks/use-map';
import { Icon, Marker, layerGroup } from 'leaflet';
import 'leaflet/dist/leaflet.css';

type MapProps = {
  city: City;
  places: Place[] | undefined;
  activePlaceId: string | undefined;
  viewType: ComponentOptions;
};

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

export default function Map({
  city,
  places,
  activePlaceId,
  viewType,
}: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map && places) {
      const markerLayer = layerGroup().addTo(map);
      places.forEach((point) => {
        const marker = new Marker({
          lat: point.location.latitude,
          lng: point.location.longitude,
        });

        marker
          .setIcon(
            point.id === activePlaceId ? currentCustomIcon : defaultCustomIcon
          )
          .addTo(markerLayer);
      });
      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, city, places, activePlaceId]);

  return (
    <section className={`${viewType.classPrefix}__map map ref={mapRef}>`} />
  );
}
