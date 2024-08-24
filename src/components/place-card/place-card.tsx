import { Place, ComponentOptions } from '@src/types/types';
import {
  PremiumType,
  BookmarkType,
  RatingType,
  PriceType,
  Pages,
} from '@src/const';
import { capitalLetterText, getRatingInPercents } from '@src/utils/utils';
import { Premium, Bookmark, Rating, Price } from '@components';
import { Link } from 'react-router-dom';
import { setActivePlaceId } from '@store/places-slice/places-slice';
import { useAppDispatch } from '@src/hooks/store';

type PlaceProps = {
  place: Place;
  viewType: ComponentOptions;
  isActivePlaceChange?: boolean;
};

export default function PlaceCard({
  place,
  viewType,
  isActivePlaceChange = true,
}: PlaceProps): JSX.Element {
  const dispatch = useAppDispatch();
  return (
    <article
      className={`${viewType.classPrefix}__card place-card`}
      onMouseEnter={
        isActivePlaceChange
          ? () => dispatch(setActivePlaceId(place.id))
          : undefined
      }
      onMouseLeave={
        isActivePlaceChange ? () => dispatch(setActivePlaceId(null)) : undefined
      }
    >
      {place.isPremium && <Premium viewType={PremiumType.Place} />}
      <div
        className={`${viewType.classPrefix}__image-wrapper place-card__image-wrapper`}
      >
        <Link to={Pages.Offer.route.replace(':offerId', place.id)}>
          <img
            className="place-card__image"
            src={place.previewImage}
            width={viewType.imageWidth}
            height={viewType.imageHeight}
            alt="Place image"
          />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <Price value={place.price} viewType={PriceType.Place} />
          <Bookmark
            placeId={place.id}
            isFavorite={place.isFavorite}
            viewType={BookmarkType.Place}
          />
        </div>
        <Rating
          valuePercent={getRatingInPercents(place.rating)}
          viewType={RatingType.Place}
        />
        <h2 className="place-card__name">
          <Link to={Pages.Offer.route.replace(':offerId', place.id)}>
            {place.title}
          </Link>
        </h2>
        <p className="place-card__type">{capitalLetterText(place.type)}</p>
      </div>
    </article>
  );
}
