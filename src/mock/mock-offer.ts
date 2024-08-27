import faker from 'faker';
import { City, Location, Offer, Place, Review } from '@src/types/types';
import { CITIES } from '@src/const';
import { mockHost, mockUser } from './mock-user';

const mockLocation = (): Location => ({
  latitude: faker.datatype.number({ min: 100, max: 500 }),
  longitude: faker.datatype.number({ min: 100, max: 500 }),
  zoom: faker.datatype.number({ min: 1, max: 20 }),
});

const mockCity = (): City => ({
  name: CITIES[faker.datatype.number(CITIES.length)],
  location: mockLocation(),
});

const mockReview = (dateReview?: string): Review => ({
  id: faker.datatype.uuid(),
  date: dateReview
    ? new Date(dateReview).toISOString()
    : faker.date.past().toISOString(),
  comment: faker.helpers.createCard().posts[0].sentences,
  rating: faker.datatype.number({ min: 1, max: 5 }),
  user: mockUser(),
});

const mockReviews = (count?: number): Review[] =>
  Array.from(
    { length: faker.datatype.number({ min: count ?? 1, max: count ?? 13 }) },
    mockReview
  );

const mockPlace = (): Place => ({
  id: faker.datatype.uuid(),
  title: faker.name.title(),
  type: faker.database.type(),
  price: Number(faker.commerce.price()),
  city: mockCity(),
  location: mockLocation(),
  previewImage: faker.internet.url(),
  isFavorite: Boolean(faker.datatype.boolean()),
  isPremium: Boolean(faker.datatype.boolean()),
  rating: faker.datatype.number({ min: 1, max: 5 }),
});

const mockPlaces = (count?: number): Place[] =>
  Array.from(
    { length: faker.datatype.number({ min: count ?? 1, max: count ?? 10 }) },
    mockPlace
  );

const mockOffer = (place?: Place): Offer => {
  const basePlace = place ?? mockPlace();
  return {
    ...basePlace,
    description: faker.commerce.productDescription(),
    bedrooms: faker.datatype.number({ min: 1, max: 7 }),
    goods: [faker.lorem.word(5)],
    host: mockHost(),
    images: [faker.internet.url(), faker.internet.url(), faker.internet.url()],
    maxAdults: faker.datatype.number({ min: 1, max: 5 }),
  };
};

export { mockCity, mockReview, mockReviews, mockPlaces, mockOffer };
