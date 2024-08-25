import {
  EMPTY_PLACE_POINTS,
  MapType,
  MAX_IMAGES_IN_GALLERY,
  ProcessStatus,
} from '@src/const';
import {
  Header,
  OfferGallery,
  OfferCard,
  Map,
  NearPlaces,
  Loading,
} from '@components';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import ErrorPage from '@pages/error-page/error-page';
import { useAppDispatch, useAppSelector } from '@src/hooks/store';
import { offerSelectors } from '@store/offer-slice/offer-slice';
import { useEffect } from 'react';
import { loadNearPlaces, loadOffer } from '@store/api-actions';
import { setActivePlaceId } from '@store/places-slice/places-slice';
import { PlacePoint } from '@src/types/types';

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
