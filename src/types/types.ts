interface Location {
  latitude: number;
  longitude: number;
  zoom: number;
}

interface City {
  name: string;
  location: Location;
}

interface PlaceCard {
  id: string;
  title: string;
  type: string;
  price: number;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  previewImage: string;
}

interface Place extends PlaceCard {
  city: City;
  location: Location;
}

type PlaceList = Array<Place>;

export type {Location, City, PlaceCard, Place, PlaceList};
