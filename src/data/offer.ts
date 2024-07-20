import {Place} from '../types/types';
import {offerList} from '../mock/mock-offer';

const getOffer = ({id}: Place) => offerList.find((offer) => offer.id === id);

export {getOffer};
