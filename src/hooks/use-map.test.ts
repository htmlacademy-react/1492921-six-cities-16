import { renderHook } from '@testing-library/react';
import useMap from './use-map';
import L from 'leaflet';
import { mockCity } from '@src/mock/mock-offer';

describe('useMap', () => {
  const city = mockCity();

  it('returns null when mapRef is null', () => {
    const mapRef = { current: null };
    const { result } = renderHook(() => useMap(mapRef, city));
    expect(result.current).toBeNull();
  });

  it('returns a map instance when mapRef is valid', () => {
    const mapRef = { current: document.createElement('div') };
    const { result } = renderHook(() => useMap(mapRef, city));
    expect(result.current).toBeInstanceOf(L.Map);
  });
});
