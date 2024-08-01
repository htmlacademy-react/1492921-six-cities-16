import { MAX_REVIEWS } from '../const';
import { Offer, Place, Review } from '../types/types';
import { offerList } from '../mock/mock-offer';
import { reviews } from '../mock/mock-reviews';
import { placesModel } from './places-model';
import { getRandomArrayElements } from '../utils';

const getOffer = (placeId: string): Offer =>
  Object.assign(
    offerList.find((item) => item.id === placeId) ?? ({} as Offer),
    placesModel.getPlace(placeId)
  );

const getOffersNearly = (placeId: string): Place[] => {
  const place = placesModel.getPlace(placeId);
  if (!place) {
    return [];
  }
  const cityName = place.city.name;
  const places = placesModel.placesCity[cityName];
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
