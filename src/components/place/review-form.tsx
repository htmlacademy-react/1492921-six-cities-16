import {
  ChangeEvent,
  ChangeEventHandler,
  FormEvent,
  useEffect,
  useState,
} from 'react';
import { RatingStars, ProcessStatus, ReviewSetup } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks/store';
import { uploadComment } from '../../store/api-actions';
import { Comment } from '../../types/types';
import { offerSelectors } from '../../store/offer-slice';

type RatingStarProps = {
  value: number;
  title: (typeof RatingStars)[number];
  rating: number;
  isDisabled: boolean;
  onRatingChange: ChangeEventHandler<HTMLInputElement>;
};
function RatingStar({
  value,
  title,
  rating,
  isDisabled,
  onRatingChange,
}: RatingStarProps): JSX.Element {
  return (
    <>
      <input
        className="form__rating-input visually-hidden"
        name="rating"
        value={value}
        id={`${value}-stars`}
        type="radio"
        checked={value === rating}
        disabled={isDisabled}
        onChange={onRatingChange}
      />
      <label
        htmlFor={`${value}-stars`}
        className="reviews__rating-label form__rating-label"
        title={title}
      >
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"></use>
        </svg>
      </label>
    </>
  );
}

type ReviewFormProps = {
  offerId: string;
};

export default function ReviewForm({ offerId }: ReviewFormProps): JSX.Element {
  const dispatch = useAppDispatch();
  const savingCommentStatus = useAppSelector(
    offerSelectors.savingCommentStatus
  );
  const isSavingComment = savingCommentStatus === ProcessStatus.Process;
  const [formData, setFormData] = useState({
    rating: 0,
    comment: '',
  });

  useEffect(() => {
    if (savingCommentStatus === ProcessStatus.Success) {
      setFormData({
        rating: 0,
        comment: '',
      });
    }
  }, [savingCommentStatus]);

  const isSubmitDisabled =
    !formData.rating ||
    formData.comment.length < ReviewSetup.CommentMinChars ||
    formData.comment.length > ReviewSetup.CommentMaxChars ||
    isSavingComment;

  const handleTextChange = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    setFormData({ ...formData, comment: evt.target.value });
  };

  const ratingChangeHandler = (evt: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, rating: +evt.target.value });
  };

  const formSubmitHandler = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const comment: Comment = { ...formData, offerId: offerId };
    dispatch(uploadComment(comment));
  };

  return (
    <form
      className="reviews__form form"
      action="#"
      method="post"
      onSubmit={formSubmitHandler}
    >
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>
      <div className="reviews__rating-form form__rating">
        {RatingStars.map((name, index) => (
          <RatingStar
            key={name}
            value={RatingStars.length - index}
            title={name}
            rating={formData.rating}
            isDisabled={isSavingComment}
            onRatingChange={ratingChangeHandler}
          />
        ))}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={formData.comment}
        disabled={isSavingComment}
        onInput={handleTextChange}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set{' '}
          <span className="reviews__star">rating</span> and describe your stay
          with at least{' '}
          <b className="reviews__text-amount">
            {ReviewSetup.CommentMinChars} characters
          </b>
          .
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={isSubmitDisabled}
        >
          Submit
        </button>
      </div>
    </form>
  );
}
