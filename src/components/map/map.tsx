import { CityName, Place, ComponentOptions } from '../../types/types';
import { MapMarkerCurrent, MapMarkerDefault } from '../../const';
import { getCity } from '../../data/cities';
import { useRef, useEffect } from 'react';
import useMap from '../../hooks/use-map';
import { Icon, Marker, layerGroup } from 'leaflet';
import 'leaflet/dist/leaflet.css';

type MapProps = {
  cityName: CityName;
  places: Place[];
  activePlaceId: string;
  viewType: ComponentOptions;
};

const defaultCustomIcon = new Icon(MapMarkerDefault);
const currentCustomIcon = new Icon(MapMarkerCurrent);

export default function Map({
  cityName,
  places,
  activePlaceId,
  viewType,
}: MapProps): JSX.Element {
  const city = getCity(cityName);
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map && places) {
      map.flyTo(
        [city.location.latitude, city.location.longitude],
        city.location.zoom
      );

      const markerLayer = layerGroup().addTo(map);
      places.forEach((place) => {
        const marker = new Marker({
          lat: place.location.latitude,
          lng: place.location.longitude,
        });

        marker
          .setIcon(
            place.id === activePlaceId ? currentCustomIcon : defaultCustomIcon
          )
          .addTo(markerLayer);
      });
      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, city, places, activePlaceId]);

  return (
    <section className={`${viewType.classPrefix}__map map`} ref={mapRef} />
  );
}
