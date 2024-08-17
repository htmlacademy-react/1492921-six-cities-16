import {
  SortOptions,
  ComponentOptions,
  PageOptions,
  Place,
  PlacePoint,
  Review,
} from './types/types';

const MAX_REVIEWS = 10;
const MAX_NEAR_PLACES_ON_MAP = 3;

const RatingStars = [
  'perfect',
  'good',
  'not bad',
  'badly',
  'terribly',
] as const;

const RatingSetup = {
  MinRating: 1,
  MaxRating: RatingStars.length,
};

const ReviewFormSetup = {
  MinChars: 50,
  MaxChars: 300,
};

const SortItems: Record<string, SortOptions> = {
  Popular: {
    text: 'Popular',
    sort: () => 0,
  },
  PriceLowToHigh: {
    text: 'Price: low to high',
    sort: (a, b) => a.price - b.price,
  },
  PriceHighToLow: {
    text: 'Price: high to low',
    sort: (a, b) => b.price - a.price,
  },
  Rating: {
    text: 'Top rated first',
    sort: (a, b) => b.rating - a.rating,
  },
} as const;

const PlaceCardType: Record<string, ComponentOptions> = {
  City: { classPrefix: 'cities', imageWidth: 260, imageHeight: 200 },
  Favorite: { classPrefix: 'favorites', imageWidth: 150, imageHeight: 110 },
};

const LogoType: Record<string, ComponentOptions> = {
  Header: { classPrefix: 'header', imageWidth: 81, imageHeight: 41 },
  Footer: { classPrefix: 'footer', imageWidth: 64, imageHeight: 33 },
};

const BookmarkType: Record<string, ComponentOptions> = {
  Place: { classPrefix: 'place-card', imageWidth: 18, imageHeight: 19 },
  Offer: { classPrefix: 'offer', imageWidth: 31, imageHeight: 33 },
};

const PremiumType: Record<string, ComponentOptions> = {
  Place: { classPrefix: 'place-card' },
  Offer: { classPrefix: 'offer' },
};

const RatingType: Record<string, ComponentOptions> = {
  Place: { classPrefix: 'place-card' },
  Offer: { classPrefix: 'offer' },
  Review: { classPrefix: 'reviews' },
};

const PriceType: Record<string, ComponentOptions> = {
  Place: { classPrefix: 'place-card' },
  Offer: { classPrefix: 'offer' },
};

const MapType: Record<string, ComponentOptions> = {
  City: { classPrefix: 'cities' },
  Offer: { classPrefix: 'offer' },
};

const Pages: Record<string, PageOptions> = {
  Main: { route: '/' },
  City: { route: '/city/:cityName' },
  Favorites: { route: '/favorites' },
  Login: { route: '/login' },
  Offer: { route: '/offer/:offerId' },
  Error: { route: '*' },
};

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

const ICON_SIZE: [number, number] = [27, 39];
const ICON_ANCHOR: [number, number] = [13, 39];

const MapMarkerDefault = {
  iconUrl: '/img/pin.svg',
  iconSize: ICON_SIZE,
  iconAnchor: ICON_ANCHOR,
};

const MapMarkerCurrent = {
  iconUrl: '/img/pin-active.svg',
  iconSize: ICON_SIZE,
  iconAnchor: ICON_ANCHOR,
};

const enum APIRoute {
  Offers = '/offers',
  Offer = '/offers/{offerId}',
  OffersNear = '/offers/{offerId}/nearby',
  Favorite = '/favorite',
  FavoritePost = '/favorite/{offerId}/{status}',
  Comments = '/comments/{offerId}',
  Login = '/login',
  Logout = '/logout',
}

const enum NameSpace {
  User = 'user',
  Places = 'places',
  Offer = 'offer',
  Favorites = 'favorites',
}

const enum ProcessStatus {
  Idle = 'IDLE',
  Process = 'PROCESS',
  Success = 'SUCCESS',
  Error = 'ERROR',
}

const EMPTY_PLACES: Place[] = [];
const EMPTY_PLACE_POINTS: PlacePoint[] = [];
const EMPTY_OFFER = null;
const EMPTY_COMMENTS: Review[] = [];

export {
  MAX_REVIEWS,
  MAX_NEAR_PLACES_ON_MAP,
  SortItems,
  RatingStars,
  Pages,
  APIRoute,
  NameSpace,
  EMPTY_PLACES,
  EMPTY_PLACE_POINTS,
  EMPTY_OFFER,
  EMPTY_COMMENTS,
};
export {
  RatingSetup,
  ReviewFormSetup,
  PlaceCardType,
  LogoType,
  BookmarkType,
  PremiumType,
  RatingType,
  PriceType,
  MapType,
  MapMarkerDefault,
  MapMarkerCurrent,
  ProcessStatus,
};
