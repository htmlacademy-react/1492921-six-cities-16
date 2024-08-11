import { City, Place, ComponentOptions, Location } from '../../types/types';
import { MapMarkerCurrent, MapMarkerDefault } from '../../const';
import { useRef, useEffect } from 'react';
import useMap from '../../hooks/use-map';
import { Icon, LayerGroup, Marker, layerGroup } from 'leaflet';
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

  const setMarker = (
    markerLayer: LayerGroup,
    location: Location,
    icon: Icon
  ): void => {
    const marker = new Marker({
      lat: location.latitude,
      lng: location.longitude,
    });
    marker.setIcon(icon).addTo(markerLayer);
  };

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
      const markerDefaultLayer = layerGroup().addTo(map);
      places.forEach((place) => {
        setMarker(markerDefaultLayer, place.location, defaultCustomIcon);
      });
      return () => {
        map.removeLayer(markerDefaultLayer);
      };
    }
  }, [map, city, places]);

  useEffect(() => {
    if (map && activePlace) {
      const markerActiveLayer = layerGroup().addTo(map);
      if (activePlace.id) {
        setMarker(markerActiveLayer, activePlace.location, currentCustomIcon);
      }
      return () => {
        map.removeLayer(markerActiveLayer);
      };
    }
  }, [map, activePlace]);

  return (
    <section className={`${viewType.classPrefix}__map map`} ref={mapRef} />
  );
}
