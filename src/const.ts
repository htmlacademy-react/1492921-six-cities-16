import {ComponentOptions, PageOptions} from './types/types';

const CITY_INIT = 'Paris';
const MAX_RATING = 5;

const PlaceCardType: Record<string, ComponentOptions> = {
  CITY: {classPrefix: 'cities', imageWidth: 260, imageHeight: 200},
  FAVORITE : {classPrefix: 'favorites', imageWidth: 150, imageHeight: 110}
};

const LogoType: Record<string, ComponentOptions> = {
  HEADER: {classPrefix: 'header', imageWidth: 81, imageHeight: 41},
  FOOTER : {classPrefix: 'footer', imageWidth: 64, imageHeight: 33}
};

const BookmarkType: Record<string, ComponentOptions> = {
  PLACE: {classPrefix: 'place-card', imageWidth: 18, imageHeight: 19},
  OFFER : {classPrefix: 'offer', imageWidth: 31, imageHeight: 33}
};

const PremiumType: Record<string, ComponentOptions> = {
  PLACE: {classPrefix: 'place-card'},
  OFFER : {classPrefix: 'offer'}
};

const Pages: Record<string, PageOptions> = {
  MAIN: {name: 'main'},
  FAVORITE: {name: 'favorite'},
  LOGIN: {name: 'login'},
  OFFER: {name: 'offer'}
};

export {CITY_INIT, MAX_RATING, PlaceCardType, LogoType, Pages, BookmarkType, PremiumType};
