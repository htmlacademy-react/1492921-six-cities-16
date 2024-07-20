import {CITIES} from '../data/cities';
type Cities = keyof typeof CITIES;
interface Location {
  latitude: number;
  longitude: number;
  zoom: number;
}
interface City {
  name: Cities;
  location: Location;
}
interface User {
  name: string;
  avatarUrl: string;
  isPro: boolean;
  email: string;
}

type Host = Omit <User, 'email'>;
interface Place {
  id: string;
  title: string;
  type: string;
  price: number;
  city: Cities;
  location: Location;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  previewImage: string;
}

type PlaceCard = Omit <Place, 'city | location'>;

type PlaceList = Place[];

interface PlacesCity {
  city: Cities;
  places: PlaceList;
}
interface Offer extends Omit <Place, 'previewImage'> {
  description: string;
  bedrooms: number;
  goods: string[];
  host: Host;
  images: string[];
  maxAdults: number;
}
interface ComponentOptions {
  classPrefix: string;
  imageWidth?: number;
  imageHeight?: number;
}
interface PageOptions {
  name: string;
}

export type {Location, City, PlaceCard, Place, Offer, PlaceList, PlacesCity, ComponentOptions, PageOptions, User};
