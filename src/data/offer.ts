import { MAX_REVIEWS } from '../const';
import { Offer, Place, Review } from '../types/types';
import { offerList } from '../mock/mock-offer';
import { offersNearly } from '../mock/mock-nearly';
import { reviews } from '../mock/mock-reviews';
import { placesModel } from './places-model';

const getOffer = (placeId: string): Offer =>
  Object.assign(
    offerList.find((offer) => offer.id === placeId) as Offer,
    placesModel.getPlace(placeId)
  );

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const getOffersNearly = (placeId: string): Place[] =>
  offersNearly.map((offer) =>
    Object.assign(offer, placesModel.getPlace(offer.id))
  );

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const getOfferReviews = (placeId: string): Review[] =>
  reviews
    .sort((item1, item2) => {
      const date1 = new Date(item1.date);
      const date2 = new Date(item2.date);
      return +date2 - +date1;
    })
    .slice(0, MAX_REVIEWS);

export { getOffer, getOffersNearly, getOfferReviews };
