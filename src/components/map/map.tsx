import { CityName, ComponentOptions, PlacePoint } from '../../types/types';
import { MapMarkerCurrent, MapMarkerDefault } from '../../const';
import { useRef, useEffect } from 'react';
import useMap from '../../hooks/use-map';
import { Icon, LayerGroup, Marker, layerGroup } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useAppSelector } from '../../hooks/store';
import { placesSelectors } from '../../store/places-slice';

type MapProps = {
  cityName: CityName;
  points: PlacePoint[];
  viewType: ComponentOptions;
};

const defaultCustomIcon = new Icon(MapMarkerDefault);
const currentCustomIcon = new Icon(MapMarkerCurrent);

export default function Map({
  cityName,
  points,
  viewType,
}: MapProps): JSX.Element {
  const activePlacePoint = useAppSelector(placesSelectors.activePlacePoint);
  const city = useAppSelector(placesSelectors.getCity(cityName));

  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  const setMarker = (
    markerLayer: LayerGroup,
    placePoint: PlacePoint,
    icon: Icon
  ): void => {
    const marker = new Marker({
      lat: placePoint.location.latitude,
      lng: placePoint.location.longitude,
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
    if (map && points) {
      const markerDefaultLayer = layerGroup().addTo(map);
      points.forEach((point) => {
        if (!activePlacePoint || point.id !== activePlacePoint.id) {
          setMarker(markerDefaultLayer, point, defaultCustomIcon);
        }
      });
      return () => {
        map.removeLayer(markerDefaultLayer);
      };
    }
  }, [map, city, points, activePlacePoint]);

  useEffect(() => {
    if (map && activePlacePoint) {
      const markerActiveLayer = layerGroup().addTo(map);
      setMarker(markerActiveLayer, activePlacePoint, currentCustomIcon);
      return () => {
        map.removeLayer(markerActiveLayer);
      };
    }
  }, [map, activePlacePoint]);

  return (
    <section className={`${viewType.classPrefix}__map map`} ref={mapRef} />
  );
}
