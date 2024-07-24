import { SortId, CityName, ComponentOptions, PageOptions } from './types/types';

const CITY_INIT: CityName = 'Hamburg';
const MAX_REVIEWS = 10;

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

const SortItems = {
  Popular: 'Popular',
  PriceLowToHigh: 'Price: low to high',
  PriceHighToLow: 'Price: high to low',
  Rating: 'Top rated first',
} as const;

const SORT_INIT: SortId = 'Popular';

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

const Pages: Record<string, PageOptions> = {
  Main: { route: '/' },
  Favorites: { route: '/favorites' },
  Login: { route: '/login' },
  Offer: { route: '/offer' },
  Error: { route: '*' },
};

export {
  SortItems,
  SORT_INIT,
  CITY_INIT,
  RatingStars,
  RatingSetup,
  ReviewFormSetup,
  MAX_REVIEWS,
  Pages,
};
export {
  PlaceCardType,
  LogoType,
  BookmarkType,
  PremiumType,
  RatingType,
  PriceType,
};
