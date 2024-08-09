import { MAX_REVIEWS } from '../const';
import { Offer, Place, Review } from '../types/types';
import { reviews } from '../mock/mock-reviews';
import { placesModel } from './places-model';
import { getRandomArrayElements } from '../utils';

const getOffer = (_placeId: string): Offer => ({} as Offer);
// Object.assign(
//   offerList.find((item) => item.id === placeId) ?? ({} as Offer),
//   placesModel.getPlace(placeId)
// );

const getOffersNearly = (placeId: string): Place[] => {
  const cityName = placesModel.getPlace(placeId)?.city.name;
  if (!cityName) {
    return [];
  }
  const places: Place[] = []; // placesModel.placesCity[cityName]?.filter(
  // (place) => place.id !== placeId
  // );
  if (!places) {
    return [];
  }
  return getRandomArrayElements(places);
};

const getOfferReviews = (_placeId: string): Review[] =>
  reviews
    .sort((item1, item2) => {
      const date1 = new Date(item1.date);
      const date2 = new Date(item2.date);
      return +date2 - +date1;
    })
    .slice(0, MAX_REVIEWS);

export { getOffer, getOffersNearly, getOfferReviews };
