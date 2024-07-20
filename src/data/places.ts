import {offers} from '../mock/mock-offers';
import {PlacesCity} from '../types/types';

const places: PlacesCity = Object.groupBy(offers, (offer) => offer.city.name);

const favorites = offers.filter((offer) => offer.isFavorite);

export {places, favorites};
