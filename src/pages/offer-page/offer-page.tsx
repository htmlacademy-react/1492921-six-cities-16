import { Pages, PlaceCardType } from '../../const';
import Header from '../../components/header/header';
import OfferGallery from '../../components/place/offer-gallery';
import OfferCard from '../../components/place/offer-card';
import PlaceCard from '../../components/place/place-card';
import { getOffer, getOffersNearly } from '../../data/offer';

type OfferProps = {
  offerId: string;
};

export default function OfferPage({ offerId }: OfferProps): JSX.Element {
  const offer = getOffer(offerId);
  return (
    <div className="page">
      <Header page={Pages.OFFER} />
      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            <OfferGallery images={offer.images} />
          </div>
          <div className="offer__container container">
            <OfferCard offer={offer} />
          </div>
          <section className="offer__map map"></section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">
              Other places in the neighbourhood
            </h2>
            <div className="near-places__list places__list">
              {getOffersNearly(offerId).map((place) => (
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
