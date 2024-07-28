import { CITIES } from '../data/cities';
import { SortItems } from '../const';

type CityName = (typeof CITIES)[number];
type SortId = keyof typeof SortItems;

type Location = {
  latitude: number;
  longitude: number;
  zoom: number;
};

type City = {
  name: CityName;
  location: Location;
};

type User = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
  email?: string;
  token?: string;
};
type Login = {
  email: string;
  password: string;
};

type Place = {
  id: string;
  title: string;
  type: string;
  price: number;
  city: City;
  location: Location;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  previewImage: string;
};

type PlaceCard = Omit<Place, 'city | location'>;

type Offer = Omit<Place, 'previewImage'> & {
  description: string;
  bedrooms: number;
  goods: string[];
  host: User;
  images: string[];
  maxAdults: number;
};

type Review = {
  id: string;
  date: string;
  user: User;
  comment: string;
  rating: number;
};

type ComponentOptions = {
  classPrefix: string;
  imageWidth?: number;
  imageHeight?: number;
};

type PageOptions = {
  route: string;
};

type PlacesCity = Partial<Record<CityName, Place[]>>;

type CallbackFunction = () => void;
type ChangeCityFunction = (currentCity: CityName) => void;

export type {
  SortId,
  CityName,
  Location,
  City,
  PlacesCity,
  PlaceCard,
  Place,
  Offer,
  Review,
};
export type {
  User,
  Login,
  ComponentOptions,
  PageOptions,
  CallbackFunction,
  ChangeCityFunction,
};
