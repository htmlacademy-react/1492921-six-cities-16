import { renderHook } from '@testing-library/react';
import useMap from './use-map';
import { City } from '@src/types/types';
import L from 'leaflet';

describe('useMap', () => {
  const mockCity: City = {
    name: 'Amsterdam',
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8,
    },
  };

  it('returns null when mapRef is null', () => {
    const mapRef = { current: null };
    const { result } = renderHook(() => useMap(mapRef, mockCity));
    expect(result.current).toBeNull();
  });

  it('returns a map instance when mapRef is valid', () => {
    const mapRef = { current: document.createElement('div') };
    const { result } = renderHook(() => useMap(mapRef, mockCity));
    expect(result.current).toBeInstanceOf(L.Map);
  });
});
