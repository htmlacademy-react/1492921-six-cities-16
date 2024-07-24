import { Review } from '../../types/types';
import { RatingType } from '../../const';
import { getOfferReviews } from '../../data/offer';
import Rating from './rating';

type ReviewProps = {
  item: Review;
};
function ReviewItem({ item }: ReviewProps): JSX.Element {
  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img
            className="reviews__avatar user__avatar"
            src={item.user.avatarUrl}
            width="54"
            height="54"
            alt="Reviews avatar"
          ></img>
        </div>
        <span className="reviews__user-name">{item.user.name}</span>
      </div>
      <div className="reviews__info">
        <Rating value={item.rating} viewType={RatingType.Review} />
        <p className="reviews__text">{item.comment}</p>
        <time className="reviews__time" dateTime={item.date}>
          {new Date(item.date).toLocaleDateString('en-GB', {
            month: 'long',
            year: 'numeric',
          })}
        </time>
      </div>
    </li>
  );
}

type ReviewsProps = {
  offerId: string;
};
export default function Reviews({ offerId }: ReviewsProps): JSX.Element {
  const reviews = getOfferReviews(offerId);
  return (
    <>
      <h2 className="reviews__title">
        Reviews &middot;{' '}
        <span className="reviews__amount">{reviews.length}</span>
      </h2>
      <ul className="reviews__list">
        {reviews.map((item) => (
          <ReviewItem key={item.id} item={item} />
        ))}
      </ul>
    </>
  );
}
