import { MapType, MAX_NEAR_PLACES_ON_MAP } from '../../const';
import Header from '../../components/header/header';
import OfferGallery from '../../components/place/offer-gallery';
import OfferCard from '../../components/place/offer-card';
import { getOffer, getOffersNearly } from '../../data/offer';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import ErrorPage from '../../pages/error-page/error-page';
import Map from '../../components/map/map';
import { placesModel } from '../../data/places-model';
import { Place } from '../../types/types';
import NearPlaces from '../../components/place/near-places';

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
      <Header />
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
              placesNearly.slice(0, MAX_NEAR_PLACES_ON_MAP)
            )}
            viewType={MapType.Offer}
          />
        </section>
        <div className="container">
          <NearPlaces places={placesNearly} />
        </div>
      </main>
    </div>
  );
}
