import { City, Place, ComponentOptions } from '../../types/types';
import { MapMarkerCurrent, MapMarkerDefault } from '../../const';
import { useRef, useEffect } from 'react';
import useMap from '../../hooks/use-map';
import { Icon, Marker, layerGroup } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useAppSelector } from '../../hooks/store';
import { placesSelectors } from '../../store/places-slice';

type MapProps = {
  city: City;
  places: Place[];
  viewType: ComponentOptions;
};

const defaultCustomIcon = new Icon(MapMarkerDefault);
const currentCustomIcon = new Icon(MapMarkerCurrent);

export default function Map({ city, places, viewType }: MapProps): JSX.Element {
  const activePlace = useAppSelector(placesSelectors.activePlace);
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      map.flyTo(
        [city.location.latitude, city.location.longitude],
        city.location.zoom,
        { animate: true, duration: 1.2 }
      );
    }
  }, [map, city]);

  useEffect(() => {
    if (map && places) {
      const markerLayer = layerGroup().addTo(map);
      places.forEach((place) => {
        const marker = new Marker({
          lat: place.location.latitude,
          lng: place.location.longitude,
        });

        marker
          .setIcon(
            activePlace && place.id === activePlace.id
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(markerLayer);
      });
      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, city, places, activePlace]);

  return (
    <section className={`${viewType.classPrefix}__map map`} ref={mapRef} />
  );
}
