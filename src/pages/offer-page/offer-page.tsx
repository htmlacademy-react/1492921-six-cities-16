import {
  Pages,
  PlaceCardType,
  MapType,
  MAX_PLACES_NEIGHBOURHOOD_ON_MAP,
} from '../../const';
import Header from '../../components/header/header';
import OfferGallery from '../../components/place/offer-gallery';
import OfferCard from '../../components/place/offer-card';
import PlaceCard from '../../components/place/place-card';
import { getOffer, getOffersNearly } from '../../data/offer';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import ErrorPage from '../../pages/error-page/error-page';
import Map from '../../components/map/map';
import { placesModel } from '../../data/places-model';
import { Place } from '../../types/types';

export default function OfferPage(): JSX.Element {
  const { offerId } = useParams();
  if (!offerId) {
    return <ErrorPage />;
  }
  const offer = getOffer(offerId);
  if (!offer.description) {
    return <ErrorPage text={offer.title} description="Offers not found" />;
  }
  const placesNearly = getOffersNearly(offerId);
  return (
    <div className="page">
      <Helmet>
        <title>6 городов. Описание предложения.?</title>
      </Helmet>
      <Header page={Pages.Offer} />
      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            <OfferGallery images={offer.images} />
          </div>
          <div className="offer__container container">
            <OfferCard offer={offer} />
          </div>
          <Map
            cityName={offer.city.name}
            places={[placesModel.getPlace(offer.id) ?? ({} as Place)].concat(
              placesNearly.slice(0, MAX_PLACES_NEIGHBOURHOOD_ON_MAP)
            )}
            activePlaceId={offer.id}
            viewType={MapType.Offer}
          />
          Get
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">
              Other places in the neighbourhood
            </h2>
            <div className="near-places__list places__list">
              {placesNearly.map((place) => (
                <PlaceCard
                  key={place.id}
                  place={place}
                  viewType={PlaceCardType.City}
                />
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
