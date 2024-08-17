import { MapType, ProcessStatus } from '../../const';
import Header from '../../components/header/header';
import OfferGallery from '../../components/place/offer-gallery';
import OfferCard from '../../components/place/offer-card';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import ErrorPage from '../../pages/error-page/error-page';
import Map from '../../components/map/map';
import NearPlaces from '../../components/place/near-places';
import { useAppDispatch, useAppSelector } from '../../hooks/store';
import { offerSelectors } from '../../store/offer-slice';
import { useEffect } from 'react';
import Loading from '../../components/loader/loading';
import { loadOffer } from '../../store/api-actions';
import { setActivePlaceId } from '../../store/places-slice';

export default function OfferPage(): JSX.Element {
  const { offerId = '' } = useParams();
  const dispatch = useAppDispatch();
  const loadingOfferStatus = useAppSelector(offerSelectors.loadingOfferStatus);
  const offer = useAppSelector(offerSelectors.offer);
  const activePlaceId = offer?.id ?? null;
  const pointsInMap = useAppSelector(offerSelectors.pointsInMap);

  useEffect(() => {
    if (offerId) {
      dispatch(loadOffer(offerId));
    }
  }, [dispatch, offerId]);

  useEffect(() => {
    if (activePlaceId) {
      dispatch(setActivePlaceId(activePlaceId));
    }
  }, [dispatch, activePlaceId]);

  if (loadingOfferStatus === ProcessStatus.Error) {
    return <ErrorPage description={`Offer not found (id = ${offerId})`} />;
  }

  return (
    <div className="page">
      <Helmet>
        <title>6 городов. Описание предложения.?</title>
      </Helmet>
      <Header />
      <main className="page__main page__main--offer">
        {!offer || loadingOfferStatus === ProcessStatus.Process ? (
          <Loading />
        ) : (
          <section className="offer">
            <div className="offer__gallery-container container">
              {offer.images && <OfferGallery images={offer.images} />}
            </div>
            <div className="offer__container container">
              <OfferCard offer={offer} />
            </div>
            <Map
              cityName={offer.city.name}
              points={pointsInMap}
              viewType={MapType.Offer}
            />
          </section>
        )}
        {loadingOfferStatus === ProcessStatus.Success && (
          <div className="container">
            <NearPlaces offerId={offerId} />
          </div>
        )}
      </main>
    </div>
  );
}
