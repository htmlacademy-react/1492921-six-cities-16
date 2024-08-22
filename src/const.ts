import {
  SortOptions,
  ComponentOptions,
  PageOptions,
  Place,
  PlacePoint,
  Review,
  PlacesCity,
} from './types/types';

const MAX_NEAR_PLACES = 3;
const MAX_IMAGES_IN_GALLERY = 6;

const CITIES = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf',
] as const;

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

const ReviewSetup = {
  MaxComments: 10,
  Sort: (item1: Review, item2: Review) =>
    +new Date(item2.date) - +new Date(item1.date),
  CommentMinChars: 50,
  CommentMaxChars: 300,
};

const SortItems = {
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
} as const satisfies Record<string, SortOptions>;

const PlaceCardType = {
  City: { classPrefix: 'cities', imageWidth: 260, imageHeight: 200 },
  Favorite: { classPrefix: 'favorites', imageWidth: 150, imageHeight: 110 },
  NearPlaces: {
    classPrefix: 'near-places',
    imageWidth: 260,
    imageHeight: 200,
  },
} as const satisfies Record<string, ComponentOptions>;

const LogoType = {
  Header: { classPrefix: 'header', imageWidth: 81, imageHeight: 41 },
  Footer: { classPrefix: 'footer', imageWidth: 64, imageHeight: 33 },
} as const satisfies Record<string, ComponentOptions>;

const BookmarkType = {
  Place: { classPrefix: 'place-card', imageWidth: 18, imageHeight: 19 },
  Offer: { classPrefix: 'offer', imageWidth: 31, imageHeight: 33 },
} as const satisfies Record<string, ComponentOptions>;

const PremiumType = {
  Place: { classPrefix: 'place-card' },
  Offer: { classPrefix: 'offer' },
} as const satisfies Record<string, ComponentOptions>;

const RatingType = {
  Place: { classPrefix: 'place-card' },
  Offer: { classPrefix: 'offer' },
  Review: { classPrefix: 'reviews' },
} as const satisfies Record<string, ComponentOptions>;

const PriceType = {
  Place: { classPrefix: 'place-card' },
  Offer: { classPrefix: 'offer' },
} as const satisfies Record<string, ComponentOptions>;

const MapType = {
  City: { classPrefix: 'cities' },
  Offer: { classPrefix: 'offer' },
} as const satisfies Record<string, ComponentOptions>;

const Pages = {
  Main: { route: '/' },
  City: { route: '/city/:cityName' },
  Favorites: { route: '/favorites' },
  Login: { route: '/login' },
  Offer: { route: '/offer/:offerId' },
  Error: { route: '*' },
} as const satisfies Record<string, PageOptions>;

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
const EMPTY_PLACES_CITIES: PlacesCity = {};
const EMPTY_PLACE_POINTS: PlacePoint[] = [];
const EMPTY_OFFER = null;
const EMPTY_COMMENTS: Review[] = [];

export {
  MAX_NEAR_PLACES,
  MAX_IMAGES_IN_GALLERY,
  CITIES,
  SortItems,
  RatingStars,
  Pages,
  APIRoute,
  NameSpace,
  EMPTY_PLACES,
  EMPTY_PLACES_CITIES,
  EMPTY_PLACE_POINTS,
  EMPTY_OFFER,
  EMPTY_COMMENTS,
};
export {
  RatingSetup,
  ReviewSetup,
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
