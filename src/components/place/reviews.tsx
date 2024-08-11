import { Review } from '../../types/types';
import { RatingType } from '../../const';
import Rating from './rating';
import { loadComments } from '../../store/api-actions';
import { useAppDispatch, useAppSelector } from '../../hooks/store';
import { useEffect } from 'react';
import { offerSelectors } from '../../store/offer-slice';
import Loading from '../loader/loading';

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
          />
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
  const dispatch = useAppDispatch();
  const isLoadingComments = useAppSelector(offerSelectors.isLoadingComments);
  const comments = useAppSelector(offerSelectors.comments);

  useEffect(() => {
    let isLoading = true;
    if (isLoading && offerId) {
      dispatch(loadComments(offerId));
    }
    return () => {
      isLoading = false;
    };
  }, [dispatch, offerId]);
  return (
    <>
      <h2 className="reviews__title">
        Reviews &middot;{' '}
        <span className="reviews__amount">{comments.length}</span>
      </h2>
      {isLoadingComments ? (
        <ul className="reviews__list">
          {comments.map((item) => (
            <ReviewItem key={item.id} item={item} />
          ))}
        </ul>
      ) : (
        <Loading />
      )}
    </>
  );
}
