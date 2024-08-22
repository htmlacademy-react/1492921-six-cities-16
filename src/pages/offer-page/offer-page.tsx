import {
  EMPTY_PLACE_POINTS,
  MapType,
  MAX_IMAGES_IN_GALLERY,
  ProcessStatus,
} from '../../const';
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
import { loadNearPlaces, loadOffer } from '../../store/api-actions';
import { setActivePlaceId } from '../../store/places-slice';
import { PlacePoint } from '../../types/types';

export default function OfferPage(): JSX.Element {
  const { offerId = '' } = useParams();
  const dispatch = useAppDispatch();

  const loadingOfferStatus = useAppSelector(offerSelectors.loadingOfferStatus);
  const offer = useAppSelector(offerSelectors.offer);

  const nearPlaces = useAppSelector(offerSelectors.nearPlacesView);
  const activePlaceId = offer?.id ?? null;

  const pointsInMap: PlacePoint[] = offer
    ? [offer as PlacePoint].concat(nearPlaces)
    : EMPTY_PLACE_POINTS;

  useEffect(() => {
    if (offerId) {
      dispatch(loadOffer(offerId));
      dispatch(loadNearPlaces(offerId));
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
            {offer.images && (
              <div className="offer__gallery-container container">
                <OfferGallery
                  images={offer.images.slice(0, MAX_IMAGES_IN_GALLERY)}
                />
              </div>
            )}
            <div className="offer__container container">
              <OfferCard offer={offer} />
            </div>
            <Map
              city={offer.city}
              points={pointsInMap}
              viewType={MapType.Offer}
            />
          </section>
        )}
        {loadingOfferStatus === ProcessStatus.Success && (
          <div className="container">
            <NearPlaces places={nearPlaces} />
          </div>
        )}
      </main>
    </div>
  );
}
